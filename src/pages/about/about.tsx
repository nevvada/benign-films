import React from 'react';

import Layout from '../../components/Layout/Layout';

import styles from './about.module.scss';

const About: React.FC = () => (
  <Layout>
    <section className={styles.section}>
      Colter Harris is a little man
    </section>
  </Layout>
);

export default About;
