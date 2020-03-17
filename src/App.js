import React from 'react';

import Layout from './components/Layout/Layout';
import Burger from './components/Burger/Burger';

function App() {
  return (
    <>
      <Layout>
        <Burger />
        <p>Build Controls</p>
      </Layout>
    </>
  );
}

export default App;
