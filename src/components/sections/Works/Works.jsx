import Work from '../../components/Work/Work';
import './_works.scss';
import { WORKS_ITEMS } from './worksItems';
// @======================== Works ========================@ //

export default function Works() {
  return (
    <section className='works scroll' id='works'>
      <div className='container'>
        <div className='works__inner'>
          <h2 className='works__heading heading'>My works</h2>
          <ul className='works__list'>
            {WORKS_ITEMS.map(
              ({ href, label, imgSrc, gifSrc, gifMobSrc }, index) => {
                return (
                  <Work
                    className={'works__item'}
                    key={index}
                    href={href}
                    imgSrc={imgSrc}
                    label={label}
                    gifSrc={gifSrc}
                    gifMobSrc={gifMobSrc}
                  />
                );
              }
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
