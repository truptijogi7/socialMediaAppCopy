import React, { useState, useEffect } from 'react';
import Menu from '../components/UserDashboard/Menu';
import Sidebar from '../components/UserDashboard/Sidebar';
import MembersList from '../components/UserDashboard/MembersList';

import { Navigate } from 'react-router-dom';

const UserDashboard = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const token = sessionStorage.getItem('token');
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // if (!sessionStorage.getItem('token')) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <div>
      <Menu />
      <div className="mt-8 lg:flex lg:justify-between">
        <Sidebar />
        <MembersList />
      </div>
    </div>
  );
};
export default UserDashboard;
