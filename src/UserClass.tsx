import React from "react";

class UserClass extends React.Component {
  constructor(props: any) {
    super(props);
    console.log("child constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    console.log(this.props.name + " child did mount");
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log(name + " childer render");

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Count +
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: Florida</h3>
        <h4>Contact: @vishal2303</h4>
      </div>
    );
  }
}

export default UserClass;
