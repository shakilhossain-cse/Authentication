import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ children }) => {
  const { user, IsLoading } = useAuth();

  const location = useLocation();

//   if (IsLoading) {
//       console.log('loading...');
//     return <p>Loading....</p>;
//   }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } 
return children;
};

export default RequireAuth;
