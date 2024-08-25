import './_contact.scss';
import { CONTACT_ITEMS } from './contactItems';

// @======================== Contact ========================@ //

export default function Contact() {
  return (
    <section className='contact scroll' id='contact'>
      <div className='container'>
        <div className='contact__inner'>
          <h2 className='contact__heading heading'>My contacts</h2>
          <ul className='contact__list'>
            {CONTACT_ITEMS.map(({ href, svg, text }, index) => {
              return (
                <li key={index} className='contact__item'>
                  <a href={href} className='contact__link'>
                    {svg} {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
