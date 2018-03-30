import React from 'react';

import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';

const menuItems = [
  {
    icon: 'chess-queen',
    url: '/prominent'
  },
  {
    icon: 'home',
    url: '/',
    active: true
  },
  {
    icon: 'users',
    url: '/committees'
  },
  {
    icon: 'chart-area',
    url: '/statistics'
  },
  {
    icon: 'clock',
    url: '/recent'
  }
];

const backgroundFromProduct = (background = null) => {
  return background === null
    ? {}
    : {
        backgroundImage: `url("${background}")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50%'
      };
};

const App = ({ children, title, background, goToCompucieScreen }) => (
  <div className="wrapper" style={backgroundFromProduct(background)}>
    <Header title={title} onClick={goToCompucieScreen} />
    <Sidebar menuItems={menuItems} />
    <Content>{children}</Content>
    <Footer />
    <div className="arrow">
      <div className="arrowContent">
        <img
          src="https://professorfrancken.nl/images/LOGO_KAAL.png"
          className="franckenLogo img-fluid"
          alt="Logo of T.F.V. 'Professor Francken'"
          onClick={goToCompucieScreen}
        />
      </div>
    </div>
  </div>
);

export default App;