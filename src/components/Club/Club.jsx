import React, { Component } from "react";

export default class Club extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return <div>Working club</div>;
  }

  componentDidMount() {
    console.log("Club component did mount");
  }

  componentDidUpdate() {
    console.log("Club component did update");
  }

  componentWillUnmount() {
    console.log("Club component will unmount");
  }
}
