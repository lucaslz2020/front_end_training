import { memo, ReactNode } from "react";

export interface SendButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const SendButton = ({ children, onClick }: SendButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default memo(SendButton);
