export interface Film {
  date: string;
  description: string;
  imageSrc: string;
  title: string;
}

const filmList: Film[] = [
  {
    date: 'Spring 2020',
    description: 'a spooky scare, the scariest of the spooks, the spookiest of the scares',
    imageSrc: 'https://res.cloudinary.com/dwcrpofnt/image/upload/v1614877506/benign-films/dominyc-poster_km33at.png',
    title: 'DomiNYC',
  },
];

export default filmList;