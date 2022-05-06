import { useEffect, useState, MouseEvent, useRef } from "react";
import { Button, Input } from "antd";

export const App = () => {
  const [pasteContent, setPasteContent] = useState<string>();
  const [pasteImage, setPasteImage] = useState();
  const notAllowedCopyRef = useRef<HTMLDivElement>(null);

  const handleCopyClick = async (event: MouseEvent) => {
    const content = (event.target as HTMLSpanElement).innerText;
    await navigator.clipboard.writeText(content);
  };

  /**
   * 禁止复制
   */
  useEffect(() => {
    const handleCopyListener = (event: ClipboardEvent) => {
      alert("禁止复制：" + document.getSelection()?.toString());
      event.preventDefault();
    };
    notAllowedCopyRef.current?.addEventListener("copy", handleCopyListener);
    return () => {
      notAllowedCopyRef.current?.removeEventListener(
        "copy",
        handleCopyListener
      );
    };
  }, []);

  /**
   * 获取粘贴内容
   */
  useEffect(() => {
    const handlePasteListener = (event: ClipboardEvent) => {
      setPasteContent(event.clipboardData?.getData("text/plain"));
      if (event.clipboardData?.items) {
        Array.from(event.clipboardData.items).forEach((item) => {
          switch (item.kind) {
            case "string": {
              item.getAsString((content) => {
                setPasteContent(content);
              });
              break;
            }
            case "file": {
              const file = item.getAsFile();
              if (file === null) {
                return;
              }
              const reader = new FileReader();
              reader.onload = (event) => {
                if (event.target?.result) {
                  setPasteImage(event.target.result as any);
                }
              };
              reader.onerror = console.log;
              reader.readAsDataURL(file);
            }
          }
        });
      }
    };
    document.body.addEventListener("paste", handlePasteListener);
    return () => {
      document.body.removeEventListener("paste", handlePasteListener);
    };
  }, []);

  return (
    <div>
      <div ref={notAllowedCopyRef}>这段内容不允许复制</div>
      <div>
        粘贴文本
        <Input value={pasteContent} />
      </div>
      <div>
        粘贴图片
        <img src={pasteImage} alt="paste-img" />
      </div>
      <Button onClick={handleCopyClick}>按钮文字内容放入粘贴文本中</Button>
    </div>
  );
};
