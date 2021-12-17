
import React from "react";
const { Component, Fragment } = React;
class Collapse extends Component {
  state = { childHeight: 0 };

  componentDidMount() {
    const childHeightRaw = this.content.clientHeight;
    const childHeight = `${childHeightRaw / 16}rem`;

    this.setState({ childHeight });
  }

  render() {
    const { children, isOpen } = this.props;
    const { childHeight } = this.state;

    return (
      <div className="collapse" style={{
          maxHeight: isOpen ? childHeight : 0
        }}>
        <div ref={content => (this.content = content)}>{children}</div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  isOpen: false
};
export default Collapse