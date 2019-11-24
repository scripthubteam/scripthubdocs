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
      imageUrl: 'img/lauu.jpg',
    },
    {
      title: <>Devsaider</>,
      imageUrl: 'img/dev.jpg',
    },
    {
      title: <>Monspeet</>,
      imageUrl: 'img/bloodbath.jpg',
    },
    {
      title: <>Tati</>,
      imageUrl: 'img/tati.png',
    },
    {
      title: <>Agate</>,
      imageUrl: 'img/agate.png',
    },
    {
      title: <>GameBoy</>,
      imageUrl: 'img/gameboy.jpg',
    },
    {
      title: <>Zhyntox</>,
      imageUrl: 'img/josue.png',
    },
    {
      title: <>Mon</>,
      imageUrl: 'img/mon.png',
    },
    {
      title: <>Axelito</>,
      imageUrl: 'img/agate.png',
    },
    {
      title: <>iClu</>,
      imageUrl: 'img/agate.png',
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