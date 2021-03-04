import Image from 'next/image';
import React from 'react';

import Layout from '../components/Layout/Layout';

import filmList from '../filmList';

const renderFilmList = (films) => (
  films.map(film => {
    const { date, imageSrc, info, title} = film;

    return (
      <>
        <h1>{title}</h1>
        <h4>{date}</h4>
        <p>{info}</p>
        <Image
          height={600}
          src={imageSrc}
          width={600}
        />
      </>
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
