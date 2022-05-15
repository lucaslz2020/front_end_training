import { useState } from "react";
import SendButton from "./components/SendButton";
import { useEventCallback } from "./hooks/useEventCallback";

export function Motivation5() {
  const [text, updateText] = useState("");
  // 即便 `text` 变了也会被记住:
  const handleSubmit = useEventCallback(() => {
    alert(text);
  }, [text]);

  return (
    <>
      <input value={text} onChange={(e) => updateText(e.target.value)} />
      <SendButton onClick={handleSubmit}>useEventCallback按钮</SendButton>
    </>
  );
}
