import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  x = () => {
    this.setState({ count: this.state.count + 1 });
  }
  y = () => {
    this.setState({ count: this.state.count - 1 });
  }
  z = () => {
    this.setState({ count: 0 });
  }
  
  render() {
    return (
      <>
     <div class="con">
        <img src="" alt="" />
  <h1 style={{color:"maroon"}}>Counter Application</h1>
  <div class="dis">
  <span id="count">{this.state.count}</span>
  </div>
  <div class="but">
    <button onClick={this.x}>+</button>
    <button onClick={this.y}>-</button>
    <button onClick={this.z}>Reset</button>
  </div>
</div>
      </>
    );
  }
}
export default Counter;