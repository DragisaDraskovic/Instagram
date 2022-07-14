import React, { Component } from "react";
import "./LoginPage.css";
import Grid from '@mui/material/Grid';
import inst_image from '../../image/images/9364675fb26a.svg';
import inst_logo from '../../image/images/logoinsta.png';
import fb_picture from '../../image/images/fb.png';
import appstore from '../../image/images/app.png';
import playstore from '../../image/images/play.png';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        1st part
                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage_main">
                            <div>
                                <img src={inst_image} width="454px"/>
                            </div>
                            <div>
                                <div className="loginpage_rightcopmonent">
                                    <img className="loginpage_logo" src={inst_logo} />
                                    <div className="loginpage_singin">
                                        <input className="loginpage_text" type="text" placeholder="  Phone number, username or email"/>
                                        <input className="loginpage_text" type="password" placeholder=" Password"/>
                                        <button className="loginpage_button">Sing In</button>
                                    </div>
                                    <div className="login_ordiv">
                                        <div className="login_dividor"></div>
                                        <div className="login_or">OR</div>
                                        <div className="login_dividor"></div>
                                    </div>                                 
                                    <div className="login_fb"> 
                                        <img src={fb_picture} width="15px" style={{ "marginRight":"5px"}} />Log in with Facebook                                     
                                    </div>
                                    <div className="login_forgot">Forgot password?</div>  
                                    
                                </div>
                                <div className="loginpage_singupoption">
                                    <div className="loginPage_singin">
                                        Don't have an account? <span style={{"fontWeight":"bold", "color":"#0395F6"}}>Sing up</span>
                                    </div>
                                    <div className="loginPage_singup">
                                        Have an account? <span style={{"fontWeight":"bold", "color":"#0395F6"}}>Sing in</span>
                                    </div>
                                </div>

                                <div className="loginPage_downloadSection">
                                    <div>
                                        Get the app.
                                    </div>
                                    <div className="loginPage_option">
                                        <img className="loginPage_dwimg" src={appstore} width="136" />
                                        <img src={playstore} width="136px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        3th part
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;