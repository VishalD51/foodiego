import React from "react";
import UserClass from "../UserClass";
import User from "./user";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount(): void {
    console.log("parent did mount");
  }

  render() {
    console.log("parent render");

    return (
      <>
        <h1>About Us</h1>
        <h2>This is about us page</h2>
        <UserClass name="user 1" />
        <UserClass name="user 2" />
      </>
    );
  }
}

export default AboutUs;
