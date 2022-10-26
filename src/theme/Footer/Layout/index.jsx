import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer__description">
          The Best open source framework for FiveM to allow anyone to build their own custom servers with ease.
          Our biggest project? ESX Legacy. It's the Best-In-Class, most performant and user friendly version of ESX ! 
          It offers the Best and most advanced methods in FiveM, while delivering unbeatable performance!
        </p>
        <div className="footer__row">
          <div className="links">{links}</div>
        </div>
        {copyright && <div className="footer__bottom text--center">{copyright}</div>}
      </div>
    </footer>
  );
}
