import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

// Context way 01

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background:theme.ui }}>La promesse de l'aube</li>
          <li style={{ background:theme.ui }}>Les racines du ciel</li>
          <li style={{ background:theme.ui }}>La harpe de Birmanie</li>
        </ul>
      </div>
    );
  }
}

export default BookList;