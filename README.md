# Kinde Starter Kit - React

## Register an account on Kinde

To get started set up an account on [Kinde](https://app.kinde.com/register).

## Setup your local environment

Clone this repo and install dependencies by running `npm i`

Make a copy of `.env_sample` and name it simply `.env`. Set the following values from the Kinde `Settings -> Applications -> Frontend app` page.

- `VITE_KINDE_CLIENT_ID` with the `Client ID` value
- `VITE_KINDE_DOMAIN` with the `Domain` value

e.g

```
VITE_KINDE_CLIENT_ID=<your_kinde_client_id>
VITE_KINDE_DOMAIN=https://<your_kinde_subdomain>.kinde.com
```

## Set your Callback and Logout URLs

Your user will be redirected to Kinde to authenticate. After they have logged in or registered they will be redirected back to your React application.

You need to specify in Kinde which url you would like your user to be redirected to in order to authenticate your app.

On the `Settings -> Applications -> Frontend app` page set `Allowed callback URLs` to `http://localhost:3000`

> Important! This is required for your users to successfully log in to your app.

You will also need to set the url they will be redirected to upon logout. Set the ` Allowed logout redirect URLs` to http://localhost:3000.

## Start your app

Run `npm start` in a terminal and navigate to `http://localhost:3000`.

Click on `Sign up` and register your first user for your business!

## View users in Kinde

If you navigate to the "Users" page within Kinde you will see your newly registered user there. 🚀
