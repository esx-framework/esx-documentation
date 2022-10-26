import React from 'react';

function Partners() {
  return (
    <section className="rds-languages" id="partners">
      <div className="container">
        <h2 className="section-title">Our partners ❤</h2>

        <ul className="partners-list">
          <li className="background-box">
            <a href="https://www.instant-gaming.com/?igr=esxframework">
              <img className="logo-partner" src="https://esx.s3.fr-par.scw.cloud/instant-gaming.png"/>
              <span className="btn">Games up to 70% off</span>
            </a>
          </li>

          <li className="background-box">
            <a href="https://store.rcore.cz/esx">
              <img className="logo-partner" src="https://esx.s3.fr-par.scw.cloud/rcore.png"/>
              <span className="btn">10% off with ESX code</span>
            </a>
          </li>

          <li className="background-box">
            <a href="https://store.17mov.pro/">
              <img className="logo-partner" src="https://esx.s3.fr-par.scw.cloud/17movement.png"/>
              <span className="btn">10% off with ESX code</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Partners;