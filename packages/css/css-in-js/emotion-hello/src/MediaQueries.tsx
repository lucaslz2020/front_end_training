import { css } from "@emotion/react";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

export const MediaQueries = () => {
  const mediaQueries = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

  return (
    <div>
      <p
        css={css({
          fontSize: 30,
          "@media (min-width: 420px)": {
            fontSize: 50,
          },
        })}
      >
        Some text!
      </p>
      <div>
        <div
          css={{
            color: "green",
            [mediaQueries[0]]: {
              color: "gray",
            },
            [mediaQueries[1]]: {
              color: "hotpink",
            },
          }}
        >
          Some text!
        </div>
        <p
          css={css`
            color: green;
            ${mediaQueries[0]} {
              color: gray;
            }
            ${mediaQueries[1]} {
              color: hotpink;
            }
          `}
        >
          Some other text!
        </p>
      </div>
      <div
        css={mq({
          color: ["green", "gray", "hotpink"],
        })}
      >
        Some text.
      </div>
    </div>
  );
};
