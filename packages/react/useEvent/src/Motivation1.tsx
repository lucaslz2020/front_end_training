import { useState } from "react";
import SendButton from "./components/SendButton";

export const Motivation1 = () => {
  const [text, setText] = useState("");
  const sendMessage = (text?: string) => {
    console.log("text", text);
  };

  // 函数引用每次都会变，达不到性能优化的目的。
  const onClick = () => {
    sendMessage(text);
  };

  return (
    <>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <SendButton onClick={onClick}>按钮</SendButton>
    </>
  );
};
