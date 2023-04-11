import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Partners from "@site/src/theme/Partner";
import Hero from "@theme/Hero";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Homepage`} description="Industry Leading FiveM Framework">
      <Hero />
      <main>
        <HomepageFeatures />
        <Partners />
      </main>
    </Layout>
  );
}
