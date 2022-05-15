import { useEffect, useRef } from "react";
import { useEvent } from "./hooks/useEvent";

function logAnalytics(visitPage: string, url: string, name: string) {}

interface TrackingProps {
  url: string;
  name: string;
}

export const Tracking = ({ url, name }: TrackingProps) => {
  useEffect(() => {
    logAnalytics("visit_page", url, name);
  }, [url, name]);
};

export const Tracking1 = ({ url, name }: TrackingProps) => {
  const urlRef = useRef<string>();
  useEffect(() => {
    if (urlRef.current === url) {
      return;
    }
    logAnalytics("visit_page", url, name);
    urlRef.current = url; // 保证urlRef引用最新的url值。
  }, [url, name]);
};

export const Tracking2 = ({ url, name }: TrackingProps) => {
  const onVisit = useEvent((url: string) => {
    logAnalytics("visit_page", url, name);
  });
  useEffect(() => {
    onVisit(url);
  }, [url]);
};
