import React, { useCallback, useState } from "react";

// import { User } from "./User"; // component display user (see detail on /example directory)
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialTwitter,
  LoginSocialApple,
} from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from "react-social-login-buttons";
import Home from "../Homepage";

// REDIRECT URL must be same with URL where the (reactjs-social-login) components is locate
// MAKE SURE the (reactjs-social-login) components aren't unmounted or destroyed before the ask permission dialog closes
// const REDIRECT_URI = window.location.href;

const LoginPage = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState(null);

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  return (
    <>
      {" "}
      {provider && profile ? (
        <Home
          provider={provider}
          profile={profile}
          onLogout={onLogoutSuccess}
        />
      ) : (
        <div className={`App ${provider && profile ? "hide" : ""}`}>
          <h1 className="title">ReactJS Social Login</h1>
          <LoginSocialFacebook
            isOnlyGetToken
            appId={
              process.env.REACT_APP_FB_APP_ID ||
              "18984899539-7jarek3fqkubuupkscu0o6a0illrb60j.apps.googleusercontent.com"
            }
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>

          <LoginSocialGoogle
            isOnlyGetCode={true}
            client_id={
              process.env.REACT_APP_GG_APP_ID ||
              "18984899539-7jarek3fqkubuupkscu0o6a0illrb60j.apps.googleusercontent.com"
            }
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
              //   console.log(provider, data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle>

          <LoginSocialApple
            client_id={
              process.env.REACT_APP_APPLE_ID ||
              "18984899539-7jarek3fqkubuupkscu0o6a0illrb60j.apps.googleusercontent.com"
            }
            scope={"name email"}
            // redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <AppleLoginButton />
          </LoginSocialApple>

          <LoginSocialAmazon
            client_id={
              process.env.REACT_APP_AMAZON_APP_ID ||
              "18984899539-7jarek3fqkubuupkscu0o6a0illrb60j.apps.googleusercontent.com"
            }
            // redirect_uri={REDIRECT_URI}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
            onLoginStart={onLoginStart}
          >
            <AmazonLoginButton />
          </LoginSocialAmazon>

          <LoginSocialInstagram
            isOnlyGetToken
            client_id={
              process.env.REACT_APP_INSTAGRAM_APP_ID ||
              "18984899539-7jarek3fqkubuupkscu0o6a0illrb60j.apps.googleusercontent.com"
            }
            client_secret={
              process.env.REACT_APP_INSTAGRAM_APP_SECRET ||
              "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"
            }
            // redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <InstagramLoginButton />
          </LoginSocialInstagram>

          <LoginSocialMicrosoft
            isOnlyGetToken
            client_id={
              process.env.REACT_APP_MICROSOFT_APP_ID ||
              "18984899539-7jarek3fqkubuupkscu0o6a0illrb60j.apps.googleusercontent.com"
            }
            // redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <MicrosoftLoginButton />
          </LoginSocialMicrosoft>

          <LoginSocialLinkedin
            isOnlyGetToken
            client_id={
              process.env.REACT_APP_LINKEDIN_APP_ID ||
              "18984899539-7jarek3fqkubuupkscu0o6a0illrb60j.apps.googleusercontent.com"
            }
            client_secret={
              process.env.REACT_APP_LINKEDIN_APP_SECRET ||
              "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"
            }
            // redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <LinkedInLoginButton />
          </LoginSocialLinkedin>

          <LoginSocialGithub
            isOnlyGetToken
            client_id={
              process.env.REACT_APP_GITHUB_APP_ID ||
              "18984899539-7jarek3fqkubuupkscu0o6a0illrb60j.apps.googleusercontent.com"
            }
            client_secret={
              process.env.REACT_APP_GITHUB_APP_SECRET ||
              "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"
            }
            // redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <GithubLoginButton />
          </LoginSocialGithub>

          <LoginSocialTwitter
            isOnlyGetToken
            client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY || ""}
            // redirect_uri={REDIRECT_URI}
            onLoginStart={onLoginStart}
            onResolve={({ provider, data }) => {
              setProvider(provider);
              setProfile(data);
            }}
            onReject={(err) => {
              console.log(err);
            }}
          >
            <TwitterLoginButton />
          </LoginSocialTwitter>
        </div>
      )}
    </>
  );
};

export default LoginPage;
