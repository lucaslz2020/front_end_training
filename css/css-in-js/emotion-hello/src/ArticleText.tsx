import { CSSObject } from "@emotion/react";

interface PProps {
  css?: CSSObject;
}

export function P(props: PProps) {
  return (
    <p
      css={{
        margin: 0,
        fontSize: 12,
        lineHeight: 1.5,
        fontFamily: "sans-serif",
        color: "black",
      }}
      {...props}
    />
  );
}
export default function ArticleText() {
  return (
    <P
      css={{
        fontSize: 14,
        fontFamily: "Georgia, serif",
        color: "darkgray",
      }}
    />
  );
}
