import { Link } from "gatsby"
import React from "react"
import superagent from "superagent";
import querystring from "querystring";
import { LoginContext } from "./context.js";

const If = props => {
    return !!props.condition ? props.children : null;
  };

const API = "https://javascript-401-api.herokuapp.com";

class LogInForm extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log('!!!!!!!!!!!!!!!!!!!!!!! after submiting form ', [e.target.name], e.target.value);
  };

  handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    superagent
      .post(`${API}/signin`)
      .auth(this.state.username, this.state.password)
      .then(response => {
        let token = response.text;
        loginMethodFromContext(token);
      })
      .catch(console.error);
  };

  logout = (e, logoutMethodFromProvider) => {
    logoutMethodFromProvider();
  };

  googleURL = () => {
    let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";

    let options = {
      client_id:
        "560654039720-5kmgrmq63ctu07hb8e973t589jio17qf.apps.googleusercontent.com",
      redirect_uri: "http://localhost:3000/oauth",
      scope: "email openid profile",
      prompt: "consent",
      response_type: "code"
    };

    let QueryString = querystring.stringify(options);

    return `${googleURL}?${QueryString}`;

  }

  render(){
    let authURL = null; //this.googleURL();
    return(
      <LoginContext.Consumer>
        {context => {
          console.log("CTX", context);
          return (
            <>
              <If condition={context.loggedIn}>
                <Link to="/">Go To Your Site</Link>
                <button 
                  id="log-out-button"
                  onClick={e=> this.logout(e, context.logout)}
                >
                Log Out
                </button>
              </If>

              <If condition={!context.loggedIn}>
                <div>
                  <form onSubmit={e => this.handleSubmit(e, context.login)}>
                    <input 
                      type="text" 
                      name="username"
                      onChange={this.handleChange}
                      />
                    <input 
                      type="text" 
                      name="password" 
                      onChange={this.handleChange}
                      />
                    <input type="submit" value="login" />
                  </form>
                <If condition={authURL}>
                  <a href={authURL}>Authorize with Google</a>
                </If>
                </div>
              </If>
            </>
          )
        }}
      </LoginContext.Consumer>
    );
  }
}

export default LogInForm;