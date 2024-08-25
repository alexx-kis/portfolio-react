import './_header-lang.scss';
import enLangIcon from '../../../../img/icons/eng.svg';
import rusLangIcon from '../../../../img/icons/rus.svg';

// ^======================== HeaderLang ========================^ //

export default function HeaderLang() {
  return (
    <div className='header-lang'>
      <div className='header-lang__selected'>
        <div className='header-lang__icon'>
          <img src={enLangIcon} alt='' />
        </div>
        <div className='header-lang__name'>EN</div>
      </div>
      <div className='header-lang__dropdown'>
        <div className='header-lang__dropdown-item'>
          <a className='header-lang__dropdown-link' href='index-ru.html'>
            <div className='header-lang__icon'>
              <img src={rusLangIcon} alt='' />
            </div>
            <div className='header-lang__name'>RU</div>
          </a>
        </div>
      </div>
    </div>
  );
};