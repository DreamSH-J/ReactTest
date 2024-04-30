/*
import React from 'react';
class Hello extends React.Component{
  render() {
    return <div>hello {this.props.toWhat}</div>
  }
}
export default Hello
*/

import React from "react";
class Hello extends React.Component{
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`)
  }
}
const element = (
  <h1 classNmae="greeting">
    Hello world!
  </h1>
)


const element1 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)

const element2 = {
  
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
}

export default Hello