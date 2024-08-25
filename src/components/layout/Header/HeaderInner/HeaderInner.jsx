import './_header-inner.scss';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import HeaderSocials from '../HeaderSocials/HeaderSocials';
import HeaderLang from '../HeaderLang/HeaderLang';

// ^======================== HeaderInner ========================^ //

export default function HeaderInner({ className }) {
  return (
    <div className={window.innerWidth > 500 ? 'header-inner' : className}>
      <HeaderMenu />
      <HeaderLang />
      <HeaderSocials />
    </div>
  );
}
