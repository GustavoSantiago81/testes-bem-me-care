import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Box } from '@mui/material'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link, redirect } from 'react-router-dom';
import { LinkedIn } from '@mui/icons-material';
import './Team.css'

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(8),
        boxShadow: '#836177 2px 2px 2px 2px',
    },
}));

function Team() {

  const classes = useStyles();
  
  const content = {
    'badge': 'Equipe',
    'header-p1': 'Olá, Seja bem vindo(a),',
    'header-p2': 'conheça nossa equipe',
    'description': 'Equipe de desenvolvimento do projeto Bem Me Care',
    

    '01_image': 'https://avatars.githubusercontent.com/u/87100085?v=4',
    '01_name': 'Danilo Moraes',
    '01_job': 'Desenvolvedor Java Full Stack',
    '01_link': 'https://github.com/Kaluribr',
    '01_linkLinkedIn': 'https://www.linkedin.com/in/danilo-moraes-364a07207',

    '02_image': 'https://avatars.githubusercontent.com/u/123930982?v=4',
    '02_name': 'Gabriel Farias',
    '02_job': 'Desenvolvedor Java Full Stack',
    '02_link': 'www.github.com/gabrielfarias',
    '02_linkLinkedIn': 'https://www.linkedin.com/in/gabriel-farias-9b8b1b1b9',

    '03_image': 'https://avatars.githubusercontent.com/u/123910445?v=4',
    '03_name': 'Gustavo Santiago',
    '03_job': 'Desenvolvedor Java Full Stack',
    '03_link': 'https://github.com/GustavoSantiago81',
    '03_linkLinkedIn': 'https://www.linkedin.com/in/gustavo-santiago-pereira-2490b0184',

    '04_image': 'https://user-images.githubusercontent.com/91226847/227216220-8761c94f-a161-467d-95c1-0942db54966f.jpeg',
    '04_name': 'Jennifer Cruz',
    '04_job': 'Desenvolvedora Java Full Stack',
    '04_link': 'https://github.com/jennifer-cruz',
    '04_linkLinkedIn': 'https://www.linkedin.com/in/jennifercruz-/',

    '05_image': 'https://avatars.githubusercontent.com/u/91226847?v=4',
    '05_name': 'Laise Farias',
    '05_job': 'Desenvolvedora Java Full Stack',
    '05_link': 'https://github.com/LaiFrance',
    '05_linkLinkedIn': 'https://www.linkedin.com/in/laise-france/',

    '06_image': 'https://avatars.githubusercontent.com/u/110050225?v=4',
    '06_name': 'Lucas Marinho',
    '06_job': 'Desenvolvedor Java Full Stack',
    '06_link': 'https://github.com/Mrnho1',
    '06_linkLinkedIn': 'https://www.linkedin.com/mwlite/in/lucas-da-silva-marinho-6462b4255',

    '07_image': 'https://avatars.githubusercontent.com/u/123839829?v=4',
    '07_name': 'Rebeca Damas',
    '07_job': 'Desenvolvedora Java Full Stack',
    '07_link': 'https://github.com/becadfd',
    '07_linkLinkedIn': 'https://www.linkedin.com/in/rebeca-de-freitas-damas-173305269',

    };

    return (
        <section className='backgroundTeam'>
            <Container maxWidth="lg">
                <Box pt={8} pb={11} textAlign="center">
                    <Box mb={10}>
                        <Container maxWidth="sm">
                            <Typography variant="overline" color="textSecondary" paragraph={true} style={{color: '#654b49'}}>{content['badge']}</Typography>
                            <Typography variant="h3" component="h2" gutterBottom={true}>
                                <Typography variant="h3" component="span" style={{color: '#836177'}}>{content['header-p1']} </Typography>
                                <Typography variant="h3" component="span" style={{color: '#654b49'}}>{content['header-p2']}</Typography>
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
                        </Container>
                    </Box>
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={3} md={3}>
                            <Avatar alt="perfil" src={content['01_image']} className={classes.avatar} style={{marginBottom: '4vh'}}/>
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{color: '#654b49'}}>{content['01_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['01_link'], '_blank')}   
                                />
                                <LinkedIn 
                                onClick={() => window.open(content['01_linkLinkedIn'], '_blank')}
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['01_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Avatar alt="perfil" src={content['02_image']} className={classes.avatar} style={{marginBottom: '4vh'}}/>
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{color: '#654b49'}}>{content['02_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['02_link'], '_blank')}
                                />
                                <LinkedIn 
                                onClick={() => window.open(content['02_linkLinkedIn'], '_blank')}
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['02_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Avatar alt="perfil" src={content['03_image']} className={classes.avatar} style={{marginBottom: '4vh'}}/>
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{color: '#654b49'}}>{content['03_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['03_link'], '_blank')}
                                />
                                <LinkedIn 
                                onClick={() => window.open(content['03_linkLinkedIn'], '_blank')}
                                />

                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['03_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <Avatar alt="perfil" src={content['04_image']} className={classes.avatar} style={{marginBottom: '4vh'}}/>
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{color: '#654b49'}}>{content['04_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['04_link'], '_blank')}
                                />
                                <LinkedIn 
                                onClick={() => window.open(content['04_linkLinkedIn'], '_blank')}
                                />
                               
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['04_job']}</Typography>
                        </Grid>
                        <Box mt={5} mb={5} />
                        <Grid item xs={12} sm={4} md={4} spacing={5}>
                            <Avatar alt="perfil" src={content['05_image']} className={classes.avatar} style={{marginBottom: '4vh'}}/>
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{color: '#654b49'}}>{content['05_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['05_link'], '_blank')}
                                />
                                <LinkedIn 
                                onClick={() => window.open(content['05_linkLinkedIn'], '_blank')}
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['05_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Avatar alt="perfil" src={content['06_image']} className={classes.avatar} style={{marginBottom: '4vh'}}/>
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{color: '#654b49'}}>{content['06_name']}</Typography>
                            <p>
                                <GitHubIcon 
                                onClick={() => window.open(content['06_link'], '_blank')}
                                />
                                <LinkedIn 
                                onClick={() => window.open(content['06_linkLinkedIn'], '_blank')}
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['06_job']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Avatar alt="perfil" src={content['07_image']} className={classes.avatar} style={{marginBottom: '4vh'}}/>
                            <Typography variant="h6" component="h6" gutterBottom={true} style={{color: '#654b49'}}>{content['07_name']}</Typography>
                            <p>
                                <GitHubIcon
                                onClick={() => window.open(content['07_link'], '_blank')}
                                />
                                <LinkedIn 
                                onClick={() => window.open(content['07_linkLinkedIn'], '_blank')}
                                />
                            </p>
                            <Typography variant="body1" color="textSecondary" component="span">{content['07_job']}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
}

export default Team;