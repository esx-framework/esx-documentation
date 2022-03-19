import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import Typed from "react-typed";

import SvgHero from "@site/src/svg/topEditor.svg";
import SvgCreate from "@site/src/svg/Create";
import SvgCreateBg from "@site/src/svg/CreateBg";
import SvgDevelop from "@site/src/svg/Develop";
import SvgDevelopBg from "@site/src/svg/DevelopBg";
import SvgExplore from "@site/src/svg/Explore";
import SvgExploreBg from "@site/src/svg/ExploreBg";
import SvgArrowRight from "@site/src/svg/ArrowRight";

function Hero() {
  return (
    <header className="rds-hero">
      <div className="container">
        <div className="row">
          <div className="col col--7">
            <h1 className="hero-title">
              The home of
              <br /> ESX Developers
            </h1>

            <h2 className="hero-subtitle">
              <Typed
                strings={[">_ Industry Leading Roleplay Framework"]}
                typeSpeed={75}
              ></Typed>
            </h2>

            <div className="boxes">
              <div className="box box-create">
                <SvgCreateBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgCreate color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Create</h3>
                  <p className="description">
                    Create a new Roleplay Server using git, or txAdmin.
                  </p>
                  <span className="more">
                    Create a server <SvgArrowRight color="#3498db" />
                  </span>
                </div>
                <a href={useBaseUrl("/legacy/installation")} className="link">Read More</a>
              </div>

              <div className="box box-develop">
                <SvgDevelopBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgDevelop color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Develop</h3>
                  <p className="description">
                    Develop your scripts using optimized and effortless code.
                  </p>
                  <span className="more">
                    Develop your script <SvgArrowRight color="#3498db" />
                  </span>
                </div>
                <a href={useBaseUrl("/legacy/installation")} className="link">Read More</a>
              </div>

              <div className="box box-explore">
                <SvgExploreBg color="#FFFFFF" className="bg" />
                <span className="icon">
                  <SvgExplore color="#FFFFFF" />
                </span>
                <div className="text">
                  <h3 className="title">Explore</h3>
                  <p className="description">
                    Explore our community on Discord.
                  </p>
                  <span className="more">
                    Explore
                    <SvgArrowRight color="#3498db" />
                  </span>
                </div>
                <a href={"https://discord.gg/ztzKWAF"} className="link">Read More</a>
              </div>
            </div>
          </div>

          <div className="col col--5">
            <SvgHero color="#FFFFFF" className="illustration" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
