import { Fn } from "../domain/types";
import { useCallback, useLayoutEffect, useRef } from "react";

export function useEvent(handler: Fn) {
  const handlerRef = useRef<Fn | null>(null);

  // 视图渲染后更新handlerRef.current, 函数执行时始终是最新的引用。
  // In a real implementation, this would run before layout effects
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  // 没有依赖项，每次render时函数的引用一致
  return useCallback((...args) => {
    // In a real implementation, this would throw if called during render
    const fn = handlerRef.current;
    return fn?.(...args);
  }, []);
}
