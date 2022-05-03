import { CacheProvider, css } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const customPlugin = () => {};

const myCache = createCache({
  key: "my-prefix-key",
  stylisPlugins: [
    customPlugin,
    // has to be included manually when customizing `stylisPlugins` if you want to have vendor prefixes added automatically
    prefixer,
  ],
});

export const Cache = () => (
  <CacheProvider value={myCache}>
    <div
      css={css`
        display: flex;
        width: 80px;
      `}
    >
      <div
        css={css`
          flex: 1;
          transform: scale(1.1);
          color: hotpink;
        `}
      >
        Some text
      </div>
    </div>
  </CacheProvider>
);
