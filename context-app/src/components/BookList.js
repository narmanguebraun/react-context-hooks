import React, { Component } from 'react';

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>La promesse de l'aube</li>
          <li>Les racines du ciel</li>
          <li>La harpe de Birmanie</li>
        </ul>
      </div>
    );
  }
}

export default BookList;