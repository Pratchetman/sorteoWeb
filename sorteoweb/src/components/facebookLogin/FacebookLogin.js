import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export const FacebookLogin = ( {setUser}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "962128931452905",
        cookie: true,
        xfbml: true,
        version: "v16.0",
      });

      window.FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  const handleLogin = () => {
    window.FB.login(
      (response) => {
        if (response.authResponse) {
          window.FB.api("/me/friends", {  fields: 'id, name' }, (userData) =>{
            // setUser(userData.name)
            console.log(userData)}
          );
          setIsLoggedIn(true);
          console.log("Logged in successfully:", response);
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scope: "email" }
    );
  };

  const handleLogout = () => {
    window.FB.logout(response => {
      setIsLoggedIn(false);
      setUser("");
      console.log('Logged out successfully:', response);
    });
  }

  return (
    <div>
      <Helmet>
        <script src="https://connect.facebook.net/en_US/sdk.js"></script>
      </Helmet>
      {isLoggedIn ? (
         <button onClick={handleLogout}>Log out</button>
      ) : (
        <button onClick={handleLogin}>Log in with Facebook</button>
      )}
    </div>
  );
};
