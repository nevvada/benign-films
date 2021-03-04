import React from 'react';

import Layout from '../../components/Layout/Layout';

import styles from './contact.module.scss';

const Contact: React.FC = () => (
  <Layout>
    <section className={styles.section}>
      <p>Colter Harris</p>
      <p>colterfriend@gmail.com</p>
    </section>
  </Layout>
);

export default Contact;
