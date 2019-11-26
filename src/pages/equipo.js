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
      title: <>Laauuu</>,
      imageUrl: 'https://avatars2.githubusercontent.com/u/33169908',
      info: "Miembro del departamento general.",
      gitUser: "https://github.com/Laauuu",
      twUser: "https://twitter.com/ScriptHubTeam",
    },
    {
      title: <>Devsaider</>,
      imageUrl: 'https://avatars0.githubusercontent.com/u/14142484',
      info: "Miembro del departamento general.",
      gitUser: "https://github.com/MrDevsaider",
      twUser: "https://twitter.com/nzk_devsaider",
    },
    {
      title: <>Monspeet</>,
      imageUrl: 'https://avatars3.githubusercontent.com/u/36456999',
      info: "Miembro del departamento general.",
      gitUser: "https://github.com/MagicNeko15",
      twUser: "https://twitter.com/NTB_Bloodbath",
    },
    {
      title: <>Tati</>,
      imageUrl: 'https://avatars0.githubusercontent.com/u/45135760',
      info: "Representante del departamento técnico.",
      gitUser: "https://github.com/tati1206",
      twUser: "https://twitter.com/ScriptHubTeam",
    },
    {
      title: <>Agate</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/42282680',
      info: "Miembro del departamento técnico.",
      gitUser: "https://github.com/AgateDevelopment",
      twUser: "https://twitter.com/agate_dev",
    },
    {
      title: <>Zhyntox</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/39054467',
      info: "Representante del departamento comunitario.",
      gitUser: "https://github.com/Asynfur",
      twUser: "https://twitter.com/",
    },
    {
      title: <>GameBoy</>,
      imageUrl: "https://avatars2.githubusercontent.com/u/19270998",
      info: "Miembro del departamento comunitario.",
      gitUser: "https://github.com/estebanDT30",
      twUser: "https://twitter.com/GameBoy0665",
    },
    {
      title: <>Mon</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/54691517',
      info: "Miembro del departamento de moderación.",
      gitUser: "https://github.com/wwmon",
      twUser: "https://twitter.com/sadwhynot",
    },
    {
      title: <>Axelito</>,
      imageUrl: 'img/logo-cord-raw.png',
      info: "Miembro del departamento de moderación.",
      gitUser: "",
      twUser: "https://twitter.com/ScriptHubTeam",
    },
    {
      title: <>iClu</>,
      imageUrl: 'https://avatars1.githubusercontent.com/u/35960254',
      info: "Miembro del departamento de moderación.",
      gitUser: "https://github.com/BulzyKrown",
      twUser: "https://twitter.com/",
    }
  ];

function Index({imageUrl, title, info, gitUser, twUser}) {
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
            <h2 align="center">{title}</h2>
            <div className={styles.icons} align="center">
              <IconContext.Provider value={{ size: "1.8em", color: "white" }}>
                <a href={gitUser} className={styles.socialIcon}><FaGithub/></a>
                <a href={twUser} className={styles.socialIcon}><FaTwitter/></a>
              </IconContext.Provider>
            </div>
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