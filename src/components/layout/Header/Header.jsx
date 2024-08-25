import './_header.scss';
import { useState } from 'react';
import HeaderInner from './HeaderInner/HeaderInner';
import Burger from '../../components/Burger/Burger';

// $======================== Header ========================$ //

export default function Header() {
  const [isInnerOpen, setIsInnerOpen] = useState(false);

  const onBurgerClick = () => {
    setIsInnerOpen(!isInnerOpen);
  };

  return (
    <header className='header'>
      <div className='container'>
        <HeaderInner className={`header-inner ${isInnerOpen ? '_open' : ''}`} />
        {window.innerWidth <= 500 ? (
          <Burger className={`burger ${isInnerOpen ? '_active' : ''}`} onBurgerClick={onBurgerClick} />
        ) : null}
      </div>
    </header>
  );
}
