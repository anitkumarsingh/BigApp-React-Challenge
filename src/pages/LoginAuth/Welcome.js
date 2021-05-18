import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import '../../static/css/Welcome.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };

    this.responseGoogle = this.responseGoogle.bind(this);
    this.signup = this.signup.bind(this);
  }

  signup(res) {
    let postData;
    if (res.qc.idpId) {
      postData = {
        name: res.profileObj.name,
        provider: 'google',
        email: res.profileObj.email,
        provider_id: res.googleId,
        token: res.access_token,
        provider_pic: res.profileObj.imageUrl
      };
      console.log(this.state.postData);
    }

    if (postData) {
      sessionStorage.setItem('userData', JSON.stringify(postData));
      this.setState({ redirect: true });
    } else {
    }
  }

  responseGoogle(response) {
    console.log('google console');
    this.signup(response, 'google');
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/home" />;
    }
    return (
      <React.Fragment>
        <div className="hero-bg">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Anit</span>
              <span className="heading-primary--sub-1">Kumar</span>
              <span className="heading-primary--sub-2">
                BigApp React
                <span className="heading-primary--sub-2__bold"> Challenge</span>
              </span>
            </h1>
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID}
              buttonText="Login with Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              className="btn btn--white btn--animated"
              style={{ color: '#333' }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Welcome;
