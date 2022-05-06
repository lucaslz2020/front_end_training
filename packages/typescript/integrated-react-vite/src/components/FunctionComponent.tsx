import { FC } from "react";
import { UserProps } from "./domain/UserProps";

// 指定函数实现。
export const User: FC<UserProps> = ({ name }) => {
  return <div>{name}</div>;
};

// 默认属性
User.defaultProps = {
  name: "",
};

export const User = ({ name }: UserProps) => {
  return <div>{name}</div>;
};
