import { css } from "@emotion/react";

const styles = css`
  font-size: 20px;
  .header {
  }
  .body {
  }
`;

export default function CSSResult() {
  console.log(styles);
  return <div css={styles}>CSS Result</div>;
}
