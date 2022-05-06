import { css } from "@emotion/react";

const color = "white";

const styles = css({
  padding: 20,
  backgroundColor: "hotpink",
  fontSize: 24,
  borderRadius: 4,
});

export default function BabelWithEmotion() {
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
      Babel Hover to change color.
    </div>
  );
}
