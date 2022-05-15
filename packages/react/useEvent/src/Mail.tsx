import { useEffect, useRef, useState } from "react";
import { useEvent } from "./hooks/useEvent";

function saveDraft(content?: string) {}

export const Mail = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    const id = setInterval(() => {
      saveDraft(content);
    }, 1000);
    return () => clearInterval(id);
  }, [content]);
};

export const Mail1 = () => {
  const [content, setContent] = useState();
  const handleSaveDraftRef = useRef<() => void>();

  const handleSaveDraft = () => {
    saveDraft(content);
  };

  useEffect(() => {
    handleSaveDraftRef.current = handleSaveDraft;
  });

  useEffect(() => {
    const id = setInterval(() => {
      handleSaveDraftRef.current?.();
    }, 1000);
    return () => clearInterval(id);
  }, []);
};

export const Mail2 = () => {
  const [content, setContent] = useState();

  const handleSaveDraft = useEvent(() => {
    saveDraft(content);
  });

  useEffect(() => {
    const id = setInterval(handleSaveDraft, 1000);
    return () => clearInterval(id);
  }, []);
};
