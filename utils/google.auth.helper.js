const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
var User = require('../model/user');

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLECLIENTID,
    clientSecret:process.env.GOOGLECLIENTSECRET,
    callbackURL: "https://resumebuilder-12.herokuapp.com/auth/google/callback",
    passReqToCallback   : true
  },
  
async function(request, accessToken, refreshToken, profile, done) {
const existingUser = await User.findOne({googleId:profile.id})
if(existingUser) {
  return done(null,existingUser)
}
    const user = {
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      password:process.env.DEFAULTPASS
    }
  User.create(user, function (err, user) {
      return done(err, user);
    });
  }
));


passport.serializeUser((user,done) => {
    done(null,user)
})

passport.deserializeUser ((user,done) => {
    done(null,user)
})

