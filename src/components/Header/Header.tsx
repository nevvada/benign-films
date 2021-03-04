import Link from 'next/link';
import React from 'react';

import styles from './Header.module.scss';

const Header: React.FC = () => (
  <nav className={styles.nav}>
    <Link href="/films">
      films
    </Link>
    <Link href="/about">
      about
    </Link>
    <Link href="/contact">
      contact
    </Link>
  </nav> 
);

export default Header;
