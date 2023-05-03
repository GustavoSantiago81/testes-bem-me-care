import React from "react";
import { jsx } from "@emotion/react";
import { Grid, Typography, styled } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const FooterStyle = styled('div') ({
  background: '#c75f77',
  color: '#fefab6',
  fontSize: '20px',
  fontStyle:'bold 1.5em',
  spacebetween: '10px',
  spacearound: '10px',
  padding: '20px',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '& img': {
    width: '100px',
    height: '100px',
    alignSelf: 'center',
    borderRadius: '10%',
    border: '1px solid white',


  },

  '& .footer': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },

});


function Footer() {
  return (
    <></>
    // <FooterStyle>
    // <div className="footer">
    //   <Grid container spacing={3}>
    //     <Grid item xs={3}>
    //       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //   <img src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-9.svg" alt="Logo" style={{ width: '100px', height: '100px', alignSelf: 'center' }} />
     
    //         <Typography variant="h6" gutterBottom component="div">
    //           Sobre
    //         </Typography>
    //         <Typography variant="body2" gutterBottom>
    //         Indústria, inovação e infraestrutura
    //         </Typography>
    //       </Box>
    //     </Grid>
    //     {/* <Grid item xs={3} >
    //       <Box sx={{  alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
    //         <GitHubIcon />
    //         <InstagramIcon />
    //         <Typography variant="h6" gutterBottom component="div">
    //           Contato
    //         </Typography>
    //         <Typography variant="body2" gutterBottom>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nunc, eget aliquam odio nisl sit amet nunc. Nullam eget nisl auctor, aliquam nu
    //         </Typography>
    //       </Box>
    //     </Grid> */}
    //     <Grid item xs={6}>
    //       <Box sx={{ display: 'flex', justifyContent:'center' , flexDirection: 'column', alignItems: 'center' }}>
    //         <Typography variant="h6" gutterBottom component="div">
    //           Redes Sociais
    //         </Typography>
    //         <Grid direction="column">
    //           <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop:'20px' }}>
    //             <InstagramIcon onClick={()=> window.open("https://www.instagram.com/carebemme/",'_blank')} style={{cursor:'pointer'}} />
    //             <Typography variant="body2" gutterBottom>
    //             </Typography>
    //           </Box>
    //           <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop:'20px'}}>
    //             <GitHubIcon onClick={()=> window.open("https://github.com/Bem-Me-Care",'_blank')} style={{cursor:'pointer'}} />
    //             <Typography variant="body2" gutterBottom>
    //             </Typography>
    //           </Box>
    //         </Grid>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    //         <Typography variant="h6" gutterBottom component="div">
    //           Localização
    //         </Typography>
    //         <Typography variant="body2" gutterBottom>
    //         Rua dos Bobos, Número 0, Boa Vista
    //         </Typography>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </div>
    // </FooterStyle>
  );
}

export default Footer;