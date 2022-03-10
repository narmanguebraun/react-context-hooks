import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthentificated: false
  }
  toggleAuth = () => {
    this.setState({ isAuthentificated: !this.state.isAuthentificated })
  }
  render() {
    return (
      <AuthContextProvider value={{...this.state, toggleAuth: this.toggleAuth }}>
        { this.props.children }
      </AuthContextProvider>
    );
  }
}

export default AuthContextProvider;
