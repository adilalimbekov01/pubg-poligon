import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Video from "../../video/pubg_Trim.mp4"



const useStyles = makeStyles((theme) => ({
  full_screen:{
    position:'relative',
    minHeight:'95vh',
    display:'flex',
    flexDirection:'column',
    color:'white'
    // justifyContent:'center'
  },
  full_screen__body:{
    width:'100%',
    height:'100%',
     padding:'50px 15px',
     backgroundColor: "rgba(0, 0, 0, 0.336)",
 position:'relative',
 zIndex:'2',
 display:'flex',
 flex:'1 1 auto',
 justifyContent:'center',
 alignItems:'center',
 flexDirection:'column',
 textTransform:'uppercase',
   },
   full_screen__title:{
    fontSize:'50px',
    letterSpacing:'25px',
    fontWeght:'700',
    margin:'0 0 20px 0'
   },
   full_screen__text:{
    fontSize:'18px',
    letterSpacing:'15px',
   },
   full_screen__video:{
      position:'fixed',
     top:0,
     left:0,
     width:'100%',
     height:'100%',
     objectFit:'cover'
   }
}));

const VideoHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.full_screen}>
    <div className={classes.full_screen__body}>
      <div className={classes.full_screen__title}>PUBG</div>
      <div className={classes.full_screen__text}>POLIGON</div>
    </div>
    <video autoPlay muted loop preload='auto' className={classes.full_screen__video}>
      {/* <source type='video/webm' src="../../video/PUBG MOBILE Global Launch Trailer.webm"  /> */}
      <source type='video/mp4' src={Video}  />
    </video>
  </div>
  );
};

export default VideoHeader;