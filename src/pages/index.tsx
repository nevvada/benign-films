import React from 'react';

import Layout from '../components/Layout/Layout';

import styles from './index.module.scss';

const Home: React.FC = () => {
  return (
    <Layout>
      <p className={styles.homepageTitle}>BENIGN FILMS</p>
    </Layout>
  );
}

export default Home;
