import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
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
        return(<div> Welcome
          </div>)
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
        <div className='col-md-6 mx-auto'>
          <header>
            <h1>{title}</h1>
          </header>
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
