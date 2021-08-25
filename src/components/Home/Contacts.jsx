import React from 'react';
import MainHeader from '../MainHeader/MainHeader';

const Contacts = () => {
    return (
        <>
        <MainHeader />
        
        <div style={{display:'flex',flexDirection:'column' ,alignItems:'center',justifyContent:'center', backgroundColor:'#141b3d', color:'white', fontSize:'18px'}}>
          <div  style={{display:'flex',flexDirection:'column', maxWidth:'890px', margin:'30px auto'}}> 
            <h2>Q&A of PUBG Poligon</h2>
                <p>Q: What is PUBG|Poligon? Why do gamers from all over the world prefer to use PUBG|Poligon to make purchases?</p>
                   <p><span style={{color:'#EBBE4A'}}>PUBG|Poligon is an official store that is used to make purchases for many popular international games such as PUBG MOBILE, Chess Rush, and CODM.</span> Users who make purchases through PUBG|Poligon can get extra rewards and can even choose their favorite local payment method based on their own region, such as recharge cards or point cards, (PUBG|Poligon supports more than 100 different payment methods) which is super convenient for users! Join PUBG|Poligon's large family immediately and have a great purchasing experience on PUBG|Poligon</p>
                <span style={{height:'2px',width:'100%', backgroundColor:'#252f56'}}></span>
                <p>Q: What is your official promotion channel?</p>
                    <p>Our official promotion account is MidasBuy Top Up-PUBGM. This is our only official promotion account. All information related to Midasbuy is updated to our official Facebook page in real-time, so please follow our Facebook page. The URL of our official Facebook page is: https://www.facebook.com/midasbuy.</p>
                <span  style={{height:'2px',width:'100%', backgroundColor:'#252f56'}}></span>
                <p>Q: How do I register for an official account on Midasbuy?</p>
                     <p>1. Go to www.midasbuy.com and tap the "Log in" button on the upper right corner of the screen, then tap the link of the registration page:
                     https://www.midasbuy.com/midasbuy/ot/login.
                    2. Select Register and enter your personal information according to the instructions, then tick the boxes to confirm that you have read the Privacy Policy and Terms of Services of Midasbuy.
                    3. Complete the registration by entering the dynamic verification code received by your registered email into the verification page to verify your email.</p>
                <span  style={{height:'2px',width:'100%', backgroundColor:'#252f56'}}></span>
                <p>Q: Where is my game ID?</p>
                    <p>In most cases, your game ID can be found in your game account, and you can search for it in the game.
                    In PUBG MOBILE: Go to the home screen of the game and tap the avatar in the upper right corner. Your game ID can be found on the Main Menu screen. Refer to the following image:</p>
                <img width='300px'style={{ margin:"0 auto" }} src="https://cdn.midasbuy.com/oversea_web/faq/images/find-id.png"/>
                
        
        </div>
        </div>
        </>
    );
};

export default Contacts;