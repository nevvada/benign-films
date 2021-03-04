import React from 'react';

import Header from '../Header/Header';

import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <main className={styles.main}>
      {children}
    </main>
  </>
);

export default Layout;
