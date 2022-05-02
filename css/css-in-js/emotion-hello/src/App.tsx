import { css, Global } from "@emotion/react";
import BabelWithEmotion from "./BabelWithEmotion";
import JSXPragmaWithEmotion from "./JSXPragmaWithEmotion";
import CSSResult from "./CSSResult";
import ArticleText, { P } from "./ArticleText";
import {
  Button,
  Button1,
  Child,
  Composition,
  Container,
  Container1,
  Container2,
  Fancy,
  Nesting,
  Parent,
} from "./StyledComponents";

function App() {
  return (
    <>
      <BabelWithEmotion />
      <JSXPragmaWithEmotion />
      <CSSResult />
      <P />
      <ArticleText />
      <Button>Hello Styled Component</Button>
      <Container>
        <Button>Hello Styled Component</Button>
      </Container>
      <Button1>默认颜色</Button1>
      <Button1 color="green">更改颜色</Button1>
      <Container1>
        <Button1>默认颜色</Button1>
      </Container1>
      <Container1 backgroundColor="pink">
        <Button1>更改颜色</Button1>
      </Container1>
      <Container2>
        <Button1>默认颜色</Button1>
      </Container2>

      <Fancy />

      <Parent>
        <Child>Green because I am inside a Parent</Child>
      </Parent>
      <Child>Red because I am not inside a Parent</Child>

      <Nesting>
        This is <a>nested</a>
      </Nesting>

      <Composition />
      <Global
        styles={css`
          .some-class {
            color: hotpink;
          }
        `}
      />
      <Global
        styles={{
          body: { margin: 0 },
          a: { textDecoration: "none", color: "red" },
          ".some-class": {
            fontSize: 50,
            textAlign: "center",
          },
        }}
      />
      <a>This is red</a>
      <div className="some-class">This classname is .some-class</div>
    </>
  );
}

export default App;
