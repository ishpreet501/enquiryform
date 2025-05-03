import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth(false);
      navigate("/login"); // Redirect to login page if no token is found
    } else {
      setAuth(true); // If token exists, set as authenticated
    }
  }, [navigate]); // Run effect only when navigate changes

  
  return (
    <>
      {children} {/* If authenticated, render the children components (protected content) */}
    </>
  );
};

export default ProtectedRoute;
