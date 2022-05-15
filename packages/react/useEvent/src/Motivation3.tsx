import { useCallback, useState } from "react";
import SendButton from "./components/SendButton";

export const Motivation3 = () => {
  const [text, setText] = useState("");
  const sendMessage = (text?: string) => {
    console.log("text", text);
  };

  //  只要text变化，onClick函数引用都会发生变化
  const onClick = useCallback(() => {
    sendMessage(text);
  }, [text]);

  return (
    <>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <SendButton onClick={onClick}>按钮</SendButton>
    </>
  );
};
