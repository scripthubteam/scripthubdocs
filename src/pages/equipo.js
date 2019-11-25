import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { makeStyles } from '@material-ui/core/styles';
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    width: "50%",
    height: "50%"
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3)
  },
  bigAvatar: {
    width: "100%",
    height: "100%"
  }
}));

const teams = [
    {
      title: <>Lauuu</>,
      imageUrl: 'https://avatars2.githubusercontent.com/u/33169908',
      info: "Entusiasta en la programación y comprometido con el trabajo.",
    },
    {
      title: <>Devsaider</>,
      imageUrl: 'https://avatars0.githubusercontent.com/u/14142484',
      info: "asd",
    },
    {
      title: <>Monspeet</>,
      imageUrl: 'https://avatars3.githubusercontent.com/u/36456999',
      info: "asd",
    },
    {
      title: <>Tati</>,
      imageUrl: 'https://avatars0.githubusercontent.com/u/45135760',
      info: "asd",
    },
    {
      title: <>Agate</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/42282680',
      info: "asd",
    },
    {
      title: <>GameBoy</>,
      imageUrl: 'https://avatars2.githubusercontent.com/u/19270998',
      info: "asd",
    },
    {
      title: <>Zhyntox</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/39054467',
      info: "asd",
    },
    {
      title: <>Mon</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/54691517',
      info: "asd",
    },
    {
      title: <>Axelito</>,
      imageUrl: 'img/logo-cord-raw.png',
      info: "asd",
    },
    {
      title: <>iClu</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/35960254',
      info: "asd",
    }
  ];

function Index({imageUrl, title, info}) {
    const imgUrl = useBaseUrl(imageUrl);
    const classes = useStyles();
    
    return (
      <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
              <div className="text--center">
                <Tooltip title={info}>
                  <Fab color="primary" className={classes.fab}>
                    <Avatar
                      alt="Remy Sharp"
                      src={imgUrl}
                      className={classes.bigAvatar}
                    />
                  </Fab>
                </Tooltip>
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