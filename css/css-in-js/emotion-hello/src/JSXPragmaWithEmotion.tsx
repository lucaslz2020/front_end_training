/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

const color = "white";

export default function JSXPragmaWithEmotion() {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      JSX Pragma Hover to change color.
    </div>
  );
}
