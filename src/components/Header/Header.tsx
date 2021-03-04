import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './Header.module.scss';

const FILMS_PATHNAME = '/films';
const ABOUT_PATHNAME = '/about';
const CONTACT_PATHNAME = '/contact';

const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <ul className={styles.navBar}>
      <li {...(pathname === FILMS_PATHNAME && { className: styles.activeRoute })}>
        <Link href={FILMS_PATHNAME}>
          films
        </Link>
      </li>
      <li {...(pathname === ABOUT_PATHNAME && { className: styles.activeRoute })}>
        <Link href={ABOUT_PATHNAME}>
          about
        </Link>
      </li>
      <li {...(pathname === CONTACT_PATHNAME && { className: styles.activeRoute })}>
        <Link href={CONTACT_PATHNAME}>
          contact
        </Link>
      </li>
    </ul>
  );
};

export default Header;
