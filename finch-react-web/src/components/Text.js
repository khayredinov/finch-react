import React, {Component} from 'react';

export default class Text extends Component {
  render() {
    return (
      <span {...this.props}>
        {this.props.children}
      </span>
    );
  }
}
