import { ThemeProvider, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const theme = {
  colors: {
    primary: "hotpink",
  },
};

const CSSProp = () => {
  return (
    <div css={(theme) => ({ color: theme.colors.primary })}>
      some other text
    </div>
  );
};

const Hook = () => {
  const theme = useTheme();
  return <div css={{ color: theme.colors.primary }}>some other text</div>;
};

const Styled = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

export const ThemeDemo = () => (
  <ThemeProvider theme={theme}>
    <CSSProp />
    <Hook />
    <Styled>some other text</Styled>
  </ThemeProvider>
);
