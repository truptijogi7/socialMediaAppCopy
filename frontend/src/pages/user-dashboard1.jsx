import React from 'react';
import Menu from '../components/UserDashboard/Menu';
import Sidebar from '../components/UserDashboard/Sidebar';
import MembersList from '../components/UserDashboard/MembersList';

const UserDashboard1 = () => {
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

export default UserDashboard1;
