# google-oauth-strategy-passport-autoconfigurator

google-oauth-strategy-passport-autoconfiguratoris a utility to reduce code and time when you need to use [passport](https://www.npmjs.com/package/passport).

# Requirements

- npm and Node.js


# Import module


## Method 01 : From Public NPM Repository

- Execute :

```
npm install google-oauth-strategy-passport-autoconfigurator --save
```

- Or manually add this to your package.json dependencies:

```
"dependencies": {
    "google-oauth-strategy-passport-autoconfigurator": "latest"
}
```
And exec

```
npm install
```

## Method 02 : Using Local NPM module

Clone this repository and execute inside the cloned folder

```
npm link
```

And in your app folder, execute

```
npm link google-oauth-strategy-passport-autoconfigurator
```

And add this to your package.json

```
"dependencies": {
    "google-oauth-strategy-passport-autoconfigurator": "latest"
}
```

**npm install** is not required.

# Usage

Imagine a simple express app

```
var express = require('express');
var app = express();

app.get('/home', function(req, res) {
  res.type('text/plain');
  res.send('Hell , its about time!!');
});

app.listen(process.env.PORT || 8080);

```

With a correct session :

```
app.use(session({
	secret: '123456789',
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: (45 * 60 * 1000)
	}
}));
```

This works perfectly, but now you need to protect **/home**. So only users logged in google are allowed.

To do that, just add this lines, before **app.listen ...**:

```
var passportAutoconfigurator = require('google-oauth-strategy-passport-autoconfigurator');

var options = {
  google: {
    client: {
      id: 'abcdreeghij.apps.googleusercontent.com',
      secret: 'abcdreeghij',
      callbackUrl: 'http://localhost:8080/auth/google/callback',
      scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
    }
  },
  express : {
    loginRoute : '/auth/google',
    callbackRoute : '/auth/google/callback',
    failureRedirectRoute : '/login'
  }
};


var googleOauthSecurity = new passportAutoconfigurator.getSecurityStrategy(app, options);

```

and add **googlePasssport.ensureAuthenticated** to **/home** route:
```
app.get('/home',googleOauthSecurity.ensureAuthenticated, function(req, res) {
  res.type('text/plain');
  res.send('Hell , its about time!!');
});

```

Next time, when user access to **localhost:8080/home** will be redirected to google login form.

# Contributors

Thanks goes to these wonderful people :

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">Richard Leon</a></label>
      <br />
    </td>    
  </tbody>
</table>
