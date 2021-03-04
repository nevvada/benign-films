import React from 'react';

import './styles.scss';

interface Props {
  Component: React.FunctionComponent;
  pageProps?: {
    [key: string]: unknown;
  };
}

const App: React.FC<Props> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
