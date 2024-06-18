import './button.css';
// import React, { Component } from 'react'

// class Button extends Component {
//   render() {
//     <button className={`button ${this.props.theme}`}>{this.props.children}</button>
//   }
// }

export function Button({children, theme="dark", onClick}) {
    // cosnt newTheme = `icon-${theme}`

    return (
      <button onClick={onClick} className={`button ${theme}`}>
        {/* <Icon newTheme={newTheme}/> */}
        {children}
      </button>
    );
  }
