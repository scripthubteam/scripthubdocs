/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Comunidad</>,
    imageUrl: 'img/undraw_hubbie.svg',
    description: (
      <>
        Se formó con la visión de intercambiar opiniones e ideas con el fin de mantener un ambiente agradable en el que todos puedan participar en discusiones de interés personal.
      </>
    ),
  },
  {
    title: <>Siempre reinventándonos</>,
    imageUrl: 'img/undraw_reinv.svg',
    description: (
      <>
        Actualizamos constantemente nuestro contenido. Trabajamos arduamente para brindar el mejor contenido de toda la web.
      </>
    ),
  },
  {
    title: <>Código abierto</>,
    imageUrl: 'img/undraw_opensource.svg',
    description: (
      <>
        Todos nuestros proyectos son de código abierto y pueden ser encontrados en nuestro GitHub.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p><br/>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Script Hub | ${siteConfig.title}`}
      description="Guías de programación">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/indice')}>
              Empezar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
