import React, {Component} from "react";

class index extends Component {
  render() {
    return (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {this.props.children}
      </button>
    );
  }
}

export default index
