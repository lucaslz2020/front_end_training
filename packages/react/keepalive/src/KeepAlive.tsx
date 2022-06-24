import { createContext, FC, useContext, useRef } from "react";
import { matchPath, useLocation, useOutlet } from "react-router";

interface KeepAliveContextProps {
  keepalive: any[];
  keepElements?: any;
  dropByCacheKey?: (path: string) => void;
}

export const KeepAliveContext = createContext<KeepAliveContextProps>({
  keepalive: [],
  keepElements: {},
});

const isKeepPath = (aliveList: any[], path: string) => {
  let result = false;
  aliveList.map((item) => {
    if (item === path) {
      result = true;
    }
    if (item instanceof RegExp && item.test(path)) {
      result = true;
    }
    if (typeof item === "string" && item.toLowerCase() === path) {
      result = true;
    }
  });
  return result;
};

export function useKeepOutlets() {
  const location = useLocation();
  const element = useOutlet();
  const { keepalive, keepElements } = useContext(KeepAliveContext);
  const isKeep = isKeepPath(keepalive, location.pathname);
  if (isKeep) {
    keepElements.current[location.pathname] = element;
  }
  return (
    <>
      {Object.entries(keepElements.current).map(([pathname, element]: any) => (
        <div
          key={pathname}
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
            overflow: "hidden auto",
          }}
          hidden={!matchPath(location.pathname, pathname)}
        >
          {element}
        </div>
      ))}
      <div
        hidden={isKeep}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden auto",
        }}
      >
        {!isKeep && element}
      </div>
    </>
  );
}

export const KeepAliveLayout: FC<KeepAliveContextProps> = (props) => {
  const { keepalive, ...restProps } = props;
  const keepElements = useRef<any>();
  const dropByCacheKey = (path: string) => {
    keepElements.current[path] = null;
  };
  return (
    <KeepAliveContext.Provider
      value={{ keepalive, keepElements, dropByCacheKey }}
      {...restProps}
    />
  );
};
