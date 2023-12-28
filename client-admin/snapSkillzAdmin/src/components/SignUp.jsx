// SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Implement your sign-up logic here (e.g., make an API call)
      // For simplicity, we'll assume a successful sign-up and generate a mock token

      // Mock token generation (replace this with your actual token generation logic)
      const mockToken = 'mock_jwt_token';

      // Set the token in cookies for persistence
      Cookies.set('token', mockToken);

      // Redirect to the sign-in page
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up:', error);
      // Handle sign-up error
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <Link to="/signin">Already have an account? Sign In</Link>
    </div>
  );
};

export default SignUp;
