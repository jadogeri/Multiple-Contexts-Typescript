 import React, { useEffect, useState } from 'react';
import { useAuthContext } from './contexts/AuthContext';
import { useAppContext } from './contexts/AppContext';
import logo from './logo.svg';
import './App.css';

function App() {
  const { state: authState, signIn, signOut } = useAuthContext();
  const { state: appState, toggleTheme } = useAppContext();
  const color = appState.theme==="dark"? "white": "black"
  return (
    <div className="App" style={{backgroundColor:appState.theme==="dark"?"#282c34" : "white"}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p style={{color:color}}>User Authenticated: {authState.isAuthenticated ? 'Yes' : 'No'}</p>
          <p style={{color:color}}>App Theme: {appState.theme}</p>
          <button onClick={() => signIn('my-token-123')} color={color}>Sign In</button>
          <button onClick={signOut}>Sign Out</button>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>

      </header>
    </div>
  );
}

export default App;

