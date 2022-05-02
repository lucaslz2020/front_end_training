import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

export const Button = styled.button`
  color: red;
  width: 200px;
  height: 50px;
`;

export const Container = styled.div({
  color: "red",
  width: 1000,
  backgroundColor: "blue",
  margin: "0 auto",
});

export const Button1 = styled.button`
  width: 200px;
  height: 50px;
  color: ${(props) => props.color || "red"};
`;

export const Container1 = styled.div((props: { backgroundColor?: string }) => ({
  color: "red",
  width: 1000,
  backgroundColor: props.backgroundColor || "blue",
  margin: "0 auto",
}));

export const Container2 = styled.div(
  {
    color: "red",
    width: 1000,
    margin: "0 auto",
  },
  (props: { backgroundColor?: string }) => ({
    backgroundColor: props.backgroundColor || "blue",
  })
);

const Basic = ({ className }: { className?: string }) => {
  return <div className={className}>Some Text</div>;
};

export const Fancy = styled(Basic)`
  color: hotpink;
`;

export const Fancy1 = styled(Basic)({});

// export const Child = styled.div`
//   color: red;
// `;
//
// export const Parent = styled.div`
//   ${Child} {
//     color: green;
//   }
// `;

export const Child = styled.div({
  color: "red",
});

export const Parent = styled.div({
  [Child as any]: {
    color: "green",
  },
});

export const Nesting = styled("span")`
  color: lightgreen;
  & > a {
    color: hotpink;
  }
`;

const Button2 = styled.button`
  color: hotpink;
`;

const a = <Button2 as="a">Emotion as props</Button2>;

const danger = css`
  color: red;
`;

const base = css`
  background-color: darkgreen;
  color: turquoise;
`;

export const Composition = () => (
  <div>
    <div css={base}>This will be turquoise</div>
    <div css={[danger, base]}>
      This will be also be turquoise since the base styles overwrite the danger
      styles.
    </div>
    <div css={[base, danger]}>This will be red</div>
  </div>
);
