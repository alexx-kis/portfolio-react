import './_burger.scss';

// ^======================== Burger ========================^ //

export default function Burger({className, onBurgerClick}) {
  return (
    <div className={className} onClick={onBurgerClick}>
      <div className='burger__line'></div>
      <div className='burger__line'></div>
      <div className='burger__line'></div>
    </div>
  );
};