import React from 'react';


const Footer = () => {

    return (

            <div style={{zIndex:"5", position:'relative',backgroundColor:"#1e2645 ", display:'flex', justifyContent:'space-around',alignItems:'center',marginBottom:0,flex: '0 0 auto', paddinTop: 10, color:'grey', minHeight:"200px" }}>
                <div style={{width:'300px', display:'flex', flexDirection:'column',}}>
                    <h4 style={{color:'white'}}>Follow us on</h4>
                    <div style={{display:'flex',}}>
                        <a target="_blank" href="https://www.instagram.com/_adil_alimbekov_/">
                        <img width="50px" height="50px" style={{margin:'0 20px'}} src="https://img.icons8.com/fluency/2x/instagram-new.png" alt="" />
                        </a>
                        <a target="_blank" href="https://twitter.com/Midasbuyglobal">
                        <img width="50px" height="50px" style={{margin:'0 20px'}} src="https://img.icons8.com/color/2x/twitter-squared.png" alt="" />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/Midasbuy/">
                        <img width="50px" height="50px" style={{margin:'0 20px'}} src="https://img.icons8.com/fluency/2x/facebook.png" alt="" />
                        </a>
                        <a target="_blank" href="https://www.youtube.com/channel/UCr8Wmg3g9NfWvx7FqMXwxng">
                        <img width="50px" height="50px" style={{margin:'0 20px'}} src="https://img.icons8.com/color/2x/youtube-play.png" alt="" />
                        </a>
                    </div>
                </div>
                <div style={{width:'350px',}}>
                <p>For customer service, please contact us via email<br/><a href="/" style={{color:'grey'}}>help@poligon.com</a> or Facebook inbox</p>
                </div>
            </div>

    );
};

export default Footer;