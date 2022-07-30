import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import insta_log from "../../image/images/logoinsta.png";
import home from "../../image/images/home.svg";
import message from "../../image/images/message.svg";
import find from "../../image/images/find.svg";
import react from "../../image/images/love.svg";
import Avatar from '@mui/material/Avatar';
import avatarPic from "../../image/images/pp1.png";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div>
                <div className='navbar_barContent'>
                    <Grid container>
                        <Grid item xs={2}>
                            I
                        </Grid>
                        <Grid item xs={3}>
                            <img className='navbar_logo' src={insta_log} width="105px" />
                        </Grid>
                        <Grid item xs={3}>
                            <input className='navbar_search' text="text" placeholder='Search' />
                        </Grid>
                        <Grid item xs={3} className="navbar_gridIIII" >
                            <img className='navbar_img' src={home} width="25px"/>
                            <img className='navbar_img' src={message} width="25px"/>
                            <img className='navbar_img' src={find} width="25px"/>
                            <img className='navbar_img' src={react} width="25px"/>
                            <Avatar src={avatarPic} className='navbar_img'/>  
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default NavBar;