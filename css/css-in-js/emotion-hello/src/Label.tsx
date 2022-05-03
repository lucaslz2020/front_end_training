/** @jsxImportSource @emotion/react */
import { jsx, css, Theme, Interpolation } from "@emotion/react";

let style = css`
  color: hotpink;
  //label: some-name;
`;

let anotherStyle = css({
  color: "lightgreen",
  // label: "another-name",
});

let ShowClassName = ({
  className,
}: {
  className?: string;
  css: Interpolation<Theme>;
}) => <div className={className}>{className}</div>;

export const Label = () => {
  return (
    <div>
      <ShowClassName css={style} />
      <ShowClassName css={anotherStyle} />
    </div>
  );
};
