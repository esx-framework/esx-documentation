import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Ease of Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        ESX was designed from the core, to be the one-stop-shop for anything you
        need for your RP server. With simple, easy to use configs and d&d
        nature, It requires no coding knowledge to setup.
      </>
    )
  },
  {
    title: <a href={"https://forge.plebmasters.de"}>Pleb Masters: Forge</a>,
    Svg: require("@site/static/img/plebmasters.svg").default,
    description: (
      <>
        Pleb Masters offers the biggest collection of GTA 5 modding & scripting tools. An essential website that will help you with searching stuff needed for resource configurations or FiveM scripting.
      </>
    )
  },
  {
    title: "Community",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        ESX has a very large and helpful Community! They are always there to
        help you and guide you. Need a resouce that the team hasn't
        made? Don't worry, someone in the community probably has!
      </>
    )
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
