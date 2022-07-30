import React, {Component} from 'react';
import "./SingUp.css";

class SingUp extends Component {
    constructor(props) {
        super(props);
        this.state = { } 
    }
    render() {
        return ( 
            <div>
                <input className="loginpage_text" type="text" placeholder="  Phone number or email"/>
                <input className="loginpage_text" type="text" placeholder="  Full name"/>
                <input className="loginpage_text" type="text" placeholder="  Username"/>
                <input className="loginpage_text" type="password" placeholder=" Password"/>
                <button className="loginpage_button">Sing up</button>
            </div>
        );
    }
}

export default SingUp;