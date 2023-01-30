import React, { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
