import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends Component {
  render() {
    return (
      // we use the consumer of the theme context we created
      // inside that, we use a function which takes in that context object as parameter
      // inside this function, we have access to this context object
      // we are destructuring some information or constants from that context object
      // and then we are setting the current theme
      // Then we are using that theme to output some different styles
      // > Another way to use Context inside a Component
      // When using class component best use way 01
      // With this approach we can use functional component
      // We can change this into a functional component
      // Also, we can use multiple contexts in one component
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          )
        }}</ThemeContext.Consumer>
    );
  }
}

export default Navbar;