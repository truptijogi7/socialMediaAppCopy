import React from 'react';
import Menu from '../components/UserDashboard/Menu';
import Sidebar from '../components/UserDashboard/Sidebar';
import Chat from '../components/Inbox/Inbox';

const Inbox = () => {
  return (
    <div>
      <Menu />
      <div className="mt-8 lg:flex lg:justify-center">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};
export default Inbox;
