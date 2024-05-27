/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const color = "white";

function App() {
    return (
        <div css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          background: var(--antd-wave-shadow-color);
          &:hover {
            color: ${color};
          }
        `}>
            Hover to change color.
        </div>
    )
}

export default App
