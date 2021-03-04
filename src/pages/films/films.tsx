import Image from 'next/image';
import React from 'react';

import Layout from '../../components/Layout/Layout';

import filmList from '../../filmList';

const renderFilmList = (films) => (
  films.map(film => {
    const { date, imageSrc, info, title} = film;

    return (
      <article style={{ display: 'flex' }}>
        <Image
          height={600}
          src={imageSrc}
          width={500}
        />
        <aside style={{ display: 'flex' }}>
          <h1>{title}</h1>
          <h4>{date}</h4>
          <p>{info}</p>
        </aside>

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
