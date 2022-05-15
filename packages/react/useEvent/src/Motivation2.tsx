import { useCallback, useState } from "react";
import SendButton from "./components/SendButton";

export const Motivation2 = () => {
  const [text, setText] = useState("");
  const sendMessage = (text?: string) => {
    console.log("text", text);
  };

  //  不添加依赖获取不到最新值。
  const onClick = useCallback(() => {
    sendMessage(text);
  }, []);

  return (
    <>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <SendButton onClick={onClick}>按钮</SendButton>
    </>
  );
};
