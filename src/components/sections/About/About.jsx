import './_about.scss';
import avatar from '../../../img/1743-sq.jpg';
import reactIcon from '../../../img/icons/react-icon.svg';

// @======================== About ========================@ //

export default function About() {
  return (
    <section className='main__about about' id='about'>
      <div className='container'>
        <div className='about__inner'>
          <div className='about__header'>
            <div className='about__headings'>
              <h2 className='about__heading heading'>Hi!</h2>
              <h2 className='about__heading heading'>
                My name is Alex and I am a frontend developer
              </h2>
            </div>
            <div className='about__image'>
              <img loading='lazy' src={avatar} alt='' />
            </div>
          </div>
          <div className='about__info'>
            <p className='about__text'>
              I have been born in Saint Petersburg and reside here now.
            </p>
            <p className='about__text'>
              I have graduated Saint Petersburg State Chemical-Pharmaceutical
              University and last years I worked as a biotechnologist according
              to my university diploma. Several years ago I started learning
              Frontend web development, firstly by myself and then studying
              courses.
            </p>
            <p className='about__text'>
              Now my studying is continuing, particularly JavaScript deeper
              learning.
            </p>
            <p className='about__text'>
              In the future I plan to study
              <span className='about__icon'>
                <img src={reactIcon} alt='' />
              </span>
              React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
