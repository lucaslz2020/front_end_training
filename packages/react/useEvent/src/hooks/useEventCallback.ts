import { DependencyList, useCallback, useEffect, useRef } from "react";
import { Fn } from "../domain/types";

export function useEventCallback(fn: Fn, dependencies: DependencyList) {
  const ref = useRef<Fn>(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn, ...dependencies]);

  return useCallback(() => {
    const fn = ref.current;
    return fn();
  }, [ref]);
}
