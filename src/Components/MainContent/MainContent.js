import React, { Component } from 'react';
import "./MainContent.css";
import Grid from '@mui/material/Grid';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div> 
                <Grid container>
                    <Grid item xs={2}>
                        I
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <StatusBar />
                            <MainPage />
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        III
                    </Grid>
                    <Grid item xs={2}>
                        IV
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default MainContent;