import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import styles from './Header.module.scss';

const ABOUT_PATHNAME = '/about';
const CONTACT_PATHNAME = '/contact';
const FILMS_PATHNAME = '/films';
const HOME_PATHNAME = '/';

const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <ul className={styles.navBar}>
      <li className={`${styles.navItem} ${pathname === HOME_PATHNAME ? styles.activeRoute : ''}`}>
        <Link href={HOME_PATHNAME}>
          HOME
        </Link>
      </li>
      <li className={`${styles.navItem} ${pathname === FILMS_PATHNAME ? styles.activeRoute : ''}`}>
        <Link href={FILMS_PATHNAME}>
          FILMS
        </Link>
      </li>
      <li className={`${styles.navItem} ${pathname === ABOUT_PATHNAME ? styles.activeRoute : ''}`}>
        <Link href={ABOUT_PATHNAME}>
          ABOUT
        </Link>
      </li>
      <li className={`${styles.navItem} ${pathname === CONTACT_PATHNAME ? styles.activeRoute : ''}`}>
        <Link href={CONTACT_PATHNAME}>
          CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default Header;
