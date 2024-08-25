import './_work.scss';
import { useState } from 'react';

// ^------------------------ Work ------------------------^ //

export default function Work({ className, href, label, imgSrc, gifSrc, gifMobSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`${className} work`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <a href={href} className='work__link' aria-label={label}>
        <div className='work__image'>
          <img
            src={
              window.innerWidth > 600 ? (isHovered ? gifSrc : imgSrc) : gifMobSrc
            }
            alt=''
          />
        </div>
      </a>
    </li>
  );
}
