import React from "react";
import UserApi from "./apis/UserApi";
import "./App.scss";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
    };
  }
  async componentDidMount() {
    const user = await UserApi.get();
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
        <h2>App</h2>
        {!this.state.user && <div>Loading...</div>}
        {this.state.user && (
          <>
            <div>id: {this.state.user.id}</div>
            <div>name: {this.state.user.name}</div>
          </>
        )}
      </div>
    );
  }
}
