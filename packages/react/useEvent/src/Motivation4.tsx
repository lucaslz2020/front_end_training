import { useCallback, useEffect, useRef, useState } from "react";
import SendButton from "./components/SendButton";

export const Motivation4 = () => {
  const [text, setText] = useState("");
  const textRef = useRef<string>();

  useEffect(() => {
    textRef.current = text; // 每次都把最新的text写入ref中
  });

  const sendMessage = (text?: string) => {
    console.log("text", text);
  };

  const onClick = useCallback(() => {
    sendMessage(textRef.current); // 从ref中获取最新值
  }, [textRef]); // 这个并不是重新生成函数引用。

  return (
    <>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <SendButton onClick={onClick}>按钮</SendButton>
    </>
  );
};
