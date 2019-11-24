import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const teams = [
    {
      title: <>Lauuu</>,
      imageUrl: 'https://avatars2.githubusercontent.com/u/33169908',
    },
    {
      title: <>Devsaider</>,
      imageUrl: 'https://avatars0.githubusercontent.com/u/14142484',
    },
    {
      title: <>Monspeet</>,
      imageUrl: 'https://avatars3.githubusercontent.com/u/36456999',
    },
    {
      title: <>Tati</>,
      imageUrl: 'https://avatars0.githubusercontent.com/u/45135760',
    },
    {
      title: <>Agate</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/42282680',
    },
    {
      title: <>GameBoy</>,
      imageUrl: 'https://avatars2.githubusercontent.com/u/19270998',
    },
    {
      title: <>Zhyntox</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/39054467',
    },
    {
      title: <>Mon</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/54691517',
    },
    {
      title: <>Axelito</>,
      imageUrl: 'img/logo-cord-raw.png',
    },
    {
      title: <>iClu</>,
      imageUrl: 'img/logo-cord-raw.png',
    }
  ];

function Index({imageUrl, title}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
      <div className={classnames('col col--4', styles.feature)}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.circularImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h2 align="center">{title}</h2><br/><br/>
      </div>
    );
  }

function Team() {
    return (
      <Layout
        title={`Equipo`}
        description="Conoce al equipo de Script Hub">
        <main>
          {teams && teams.length && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {teams.map((props, idx) => (
                    <Index key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>
      </Layout>
    );
}
export default Team;