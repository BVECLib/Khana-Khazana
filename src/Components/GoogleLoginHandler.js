import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import { UserContext } from "../Contexts/UserContext";
import { useLocation } from "react-router-dom";

function GoogleLoginHandler() {
  const [, setCurrentUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const returnSuccess = (response) => {
    setCurrentUser(response.profileObj.name);
    localStorage.setItem("loginEmail", response.profileObj.email);
    localStorage.setItem("loginImg", response.profileObj.imageUrl);
    localStorage.setItem("loginFullname", response.profileObj.name);
    localStorage.setItem("loginFirstName", response.profileObj.givenName);
    localStorage.setItem("loginLastName", response.profileObj.familyName);
    
    let path = location.pathname;
    if (path === "/login") {
      history.push("/cart");
    }
  };
  
  const returnFail = (response) => {
    console.log("error");
    alert("Enable cookies for the website to work properly.");
  };

  return (
    <div>
      <GoogleLogin
        clientId="1067203766174-31ldgmqpmlcoipsn3vvdtkaigj0503if.apps.googleusercontent.com"
        buttonText="Log in using Google"
        onSuccess={returnSuccess}
        onFailure={returnFail}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

//
// 713813805970-crgp3o2j0pttk94tctgslv0nr1hiiu9e.apps.googleusercontent.com
//1067203766174-31ldgmqpmlcoipsn3vvdtkaigj0503if.apps.googleusercontent.com
// https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttp%2Flocalhost%3A3000%3Fid%3Dauth130414&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=713813805970-crgp3o2j0pttk94tctgslv0nr1hiiu9e.apps.googleusercontent.com&ss_domain=http%3A%2F%2Flocalhost%3A3000&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow


export default GoogleLoginHandler;
