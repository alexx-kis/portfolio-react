import './_hero.scss';
import '../../../scripts/animations';

// @======================== Hero ========================@ //

export default function Hero() {
  return (
    <section className='main__hero hero scroll'>
      <div className='container'>
        <div className='hero__inner'>
            <h1 className='hero__heading heading _main'>
              Hi! I'm Alex
            </h1>
            <p className='hero__text'>
              a frontend developer
            </p>
          <div className='hero__heading main-heading loading'>
          </div>
          <a
            className='hero__button loading'
            href='./docs/CV.pdf'
            target='_blank'
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
