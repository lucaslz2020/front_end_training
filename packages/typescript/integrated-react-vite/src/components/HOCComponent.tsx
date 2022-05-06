import { Component, ComponentType } from "react";

interface HOCComponentProps {
  isLoading?: boolean;
}

export function HOCComponent<P>(WrapperComponent: ComponentType<P>) {
  return class extends Component<P & HOCComponentProps> {
    render() {
      const { isLoading, ...restProps } = this.props;
      return <WrapperComponent {...(restProps as P)} />;
    }
  };
}
