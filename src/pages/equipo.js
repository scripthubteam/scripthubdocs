import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { makeStyles } from '@material-ui/core/styles';
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";

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
      info: "Miembro del departamento general.",
    },
    {
      title: <>Devsaider</>,
      imageUrl: 'https://avatars0.githubusercontent.com/u/14142484',
      info: "Miembro del departamento general.",
    },
    {
      title: <>Monspeet</>,
      imageUrl: 'https://avatars3.githubusercontent.com/u/36456999',
      info: "Miembro del departamento general.",
    },
    {
      title: <>Tati</>,
      imageUrl: 'https://avatars0.githubusercontent.com/u/45135760',
      info: "Representante del departamento técnico.",
    },
    {
      title: <>Agate</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/42282680',
      info: "Miembro del departamento técnico.",
    },
    {
      title: <>Zhyntox</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/39054467',
      info: "Representante del departamento comunitario.",
    },
    {
      title: <>GameBoy</>,
      imageUrl: "https://avatars2.githubusercontent.com/u/19270998",
      info: "Miembro del departamento comunitario.",
    },
    {
      title: <>Mon</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/54691517',
      info: "Miembro del departamento de moderación.",
    },
    {
      title: <>Axelito</>,
      imageUrl: 'img/logo-cord-raw.png',
      info: "Miembro del departamento de moderación.",
    },
    {
      title: <>iClu</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/35960254',
      info: "Miembro del departamento de moderación.",
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
            <h2 align="center">{title}<br/>
              <IconContext.Provider value={{ size: "1.2em" }}>
                <FaGithub/>
              </IconContext.Provider>
              <IconContext.Provider value={{ size: "1.2em" }}>
                <FaTwitter/>
              </IconContext.Provider>
            </h2>
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