import Image from 'next/image';
import React from 'react';

import Layout from '../../components/Layout/Layout';

import styles from './films.module.scss';

import filmList, { Film } from '../../filmList';

const renderFilmList = (films: Film[]) => (
  films.map(film => {
    const { date, description, imageSrc, title} = film;

    return (
      <article
        className={styles.article}
        key={title}
      >
        <Image
          className={styles.image}
          height={600}
          src={imageSrc}
          width={500}
        />
        <div className={styles.filmInfo}>
          <h1 className={styles.filmInfoTitle}>{title}</h1>
          <h4 className={styles.filmInfoDate}>{date}</h4>
          <p className={styles.filmInfoDescription}>{description}</p>
        </div>

      </article>
    )
  })
);

const Films: React.FC = () => (
  <Layout>
    <section>
      {renderFilmList(filmList)}
    </section>
  </Layout>
);

export default Films;
