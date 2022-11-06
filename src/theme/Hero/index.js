import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Typed from "react-typed";

import SvgCreate from "@site/src/svg/Create";
import SvgDevelop from "@site/src/svg/Develop";
import SvgArrowRight from "@site/src/svg/ArrowRight";
import SvgHero from "@site/src/svg/developer.svg";


import {useColorMode} from '@docusaurus/theme-common';


function Hero() {
  const {colorMode, setColorMode} = useColorMode();
  return (
    <header className="rds-hero">
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <h1 className="hero-title">
              The Home of
              <br /> ESX Developers
            </h1>

            <h2 className="hero-subtitle">
              <Typed
                strings={[">_ Creating a roleplay server has never been easier."]}
                typeSpeed={75}
              ></Typed>
            </h2>

            <div className="boxes">
              <div className="box box-create">
                <span className="icon">
                  <SvgCreate color="#fd9800" />
                </span>
                <div className="text">
                  <h3 className="title">Create</h3>
                  <p className="description">
                    Create A Roleplay Server With Ease using txAdmin or
                    Github!
                  </p>
                  <span className="more">
                    Create Your Server <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a
                  href={useBaseUrl("/legacy/installation")}
                  className="link"
                >
                  Read More
                </a>
              </div>

              <div className="box box-develop">
                <span className="icon">
                  <SvgDevelop color="#fd9800"/>
                </span>
                <div className="text">
                  <h3 className="title">Develop</h3>
                  <p className="description">
                    Learn how to effortlessly create your own resources
                  </p>
                  <span className="more">
                    Develop your Script <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a
                  href={useBaseUrl("/legacy/installation")}
                  className="link"
                >
                  Read More
                </a>
              </div>
              

              <div className="box">
                <img className="icon-logo" src={colorMode === 'dark' ? 'https://esx.s3.fr-par.scw.cloud/logo_white.png' : 'https://esx.s3.fr-par.scw.cloud/logo_black.png'}/>
                <div className="text">
                  <h3 className="title"></h3>
                  <p className="description">
                  The most ecological, high performance and high end hosting for your game servers. 10% off with the code <b>ESX</b>
                  </p>
                  <span className="more">
                    Explore Their Store!
                    <SvgArrowRight color="#DC382C" />
                  </span>
                </div>
                <a href={"https://www.oxygenserv.com/en/hosting/gta-v-server/"} className="link">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col col--5">
            <SvgHero className="illustration" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
