import { Avatar } from "@mui/material";
import React, { Component } from "react";
import "./StatusBar.css";
import statusimg from "../../image/images/pp1.png"

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return ( 
            <div>
                <div className="satusbar_container">
                    <div className="status">
                        <Avatar className="statusbar_status" src={statusimg} />
                        <div className="statusbar_text">UserName</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatusBar;