import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const styles = {
    facebookBtn: {
      backgroundColor: 'rgb(51, 89, 157)'
    },
    form: {
      textAlign: 'center'
    }
  }
  class Login extends React.Component {
    constructor(){
        super();
        this.state = {
         email: '',password: ''
            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    } 
    handleOnSubmit = (e) => {
      e.preventDefault();
      var data = JSON.parse(localStorage.getItem('data'))
      try{
        for(var i=0;i<data.length;i++){
            if(data[i]['email']==this.state.email && data[i]['password']==this.state.password)
            {
                ReactDOM.render(
                    <Form children={ <Wel /> } />,
                    document.getElementById('root')
                  );
                  return;
            }
        }
        alert("Invalid/Username/Password Miss match")
        this.setState({['password']: ''});

      }catch(d){
          alert("Invalid/Username/Password Miss match")
    this.setState({['password']: ''});

      }
     
    };
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      
    handleSingUp = (e) => {
        ReactDOM.render(
            <Form children={ <Reg /> } />,
            document.getElementById('root')
          );
          
    };
    render() {
        

            return (
                <div>
                    <div>
                        <form className='form' style={styles.form} onSubmit={this.handleOnSubmit}>
                            <h4>Login</h4>
                            <div className='form-group row'>
                            <input className='input' name="email" type='email' value={this.state.email}  onChange={this.handleChange} placeholder='Email' required/>
                            </div>
                            <div className='form-group row'>
                            <input className='input' name="password" type='password' placeholder='Password' value={this.state.password}  onChange={this.handleChange} required/>
                            </div>
                            <div className='form-group row'>
                            <button className='button' type='submit'>Log In</button>
                            </div>
                            <div className='form-group row'>
                            <button className='button' type='button' onClick={this.handleSingUp}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>

                
            )
        }
       
  }
  class Wel extends React.Component {
   
      render(){
        return(
        <div>
        <div className="col-sm-12 header"> 
            <div className="col-sm-3">
              <img className="img" src="https://i.ibb.co/sw1MLKt/1-UU0-O3x5-Wn-Ie3c6-Kaz-W1-Gw.png" border="0"/>
            </div>
            <div className="col-sm-6 con">
              
              <center>
                <h3>Digital Twin
                </h3>
              <h5>Taking warehouse from Physical to Digital
                </h5>
                </center>
            </div>
            <div  className="col-sm-3">
            <img className="wipro" src="https://www.wipro.com/content/dam/nexus/en/brand/Wipro-Logo-w88X70h-Px.png"  border="0"/>
            </div>
          </div>
          <div className="col-sm-12">

          <div className="row">
          <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
              <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
              <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
              <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
            </div>
          </div>
        </div>
          </div>
        </div>
          )
      }
  }

  class Reg extends React.Component {
   constructor(){
       super();
       this.state = {
        f_name: '',l_name: '',p_no: '',email: '',password: '',c_password: ''
           
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleOnSubmit = this.handleOnSubmit.bind(this);
   }
  handleOnSubmit = (e) => {
    var w= e.preventDefault();
    var datas = []
    if(this.state.password == this.state.c_password){
        try{
            datas = localStorage.getItem("data")

            if(JSON.parse(datas)[0]['f_name'] != ""){
                datas =  JSON.parse(datas)
                datas[datas.length] = this.state
            }

        }catch(d){
            datas = []
            datas[0] =  (this.state)
        }
        localStorage.setItem("data",JSON.stringify(datas))
         
  ReactDOM.render(
    <Form children={ <Login /> } />,
    document.getElementById('root')
  );
  
    }else{
    this.setState({['password']: ''});
    this.setState({['c_password']: ''});
        alert("Password Miss Match");
    }

  };
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  
  render() {
      

          return(

            <div>
            <form className='form' style={styles.form} onSubmit={this.handleOnSubmit}>
                <h4>Register</h4>
                <div className='form-group row'>
                <input className='input' name="f_name" type='text' placeholder='First Name' value={this.state.f_name}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="l_name" type='text' placeholder='Last Name' value={this.state.l_name}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="p_no" type='number' max={99999999999} placeholder='Phone No' value={this.state.p_no}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="email" type='email' placeholder='Email' value={this.state.email}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="password" type='password' placeholder='Password' value={this.state.password}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <input className='input' name="c_password" type='password' placeholder='Confirm Password' value={this.state.c_password}  onChange={this.handleChange} required/>
                </div>
                <div className='form-group row'>
                <button className='button' type='submit'>Save</button>
                </div>
            </form>
        </div>
          )
      }
  
}

  
  class Form extends React.Component {
    render () {
      const {children, title} = this.props
      return (
        <div >
          {children}
        </div>
      )
    }
  }
  
  
  ReactDOM.render(
    <Form children={ <Login /> } />,
    document.getElementById('root')
  );
  
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
