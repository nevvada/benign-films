import React from 'react';

import Header from '../Header/Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
