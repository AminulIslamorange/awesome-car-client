import React, { useState, useReducer } from 'react';
import axios from 'axios';

// LoginPage component
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://example.com/v1/api/login', {
        email,
        password,
      });

      const { token, user_id, role } = response.data;

      // TODO: Dispatch the LOGIN action to update the context state
      // You can use the dispatch function from the context

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// AuthProvider component
export const AuthContext = React.createContext();

const initialState = {
  token: null,
  user_id: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.payload.token,
        user_id: action.payload.user_id,
        role: action.payload.role,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

