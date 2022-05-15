import { useState } from "react";
import SendButton from "./components/SendButton";
import { useEvent } from "./hooks/useEvent";

export function Motivation6() {
  const [text, updateText] = useState("");
  // 即便 `text` 变了也会被记住:
  const handleSubmit = useEvent(() => {
    alert(text);
  });

  return (
    <>
      <input value={text} onChange={(e) => updateText(e.target.value)} />
      <SendButton onClick={handleSubmit}>useEventCallback按钮</SendButton>
    </>
  );
}
