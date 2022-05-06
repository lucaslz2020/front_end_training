import { Component } from "react";
import { Button } from "antd";
import { UserProps } from "./domain/UserProps";

interface UserState {
  age?: number;
}

export class User extends Component<UserProps, UserState> {
  state = {
    age: 0,
  };

  growUp = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        {this.props.name}: {this.state.age}
        <Button ghost type="primary" onClick={this.growUp}>
          长大
        </Button>
      </div>
    );
  }
}
