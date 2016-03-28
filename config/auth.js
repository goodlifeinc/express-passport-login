// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'client-id', // your App ID
        'clientSecret'  : 'client-secret', // your App Secret
        'callbackURL'   : 'callback-url',
        'profileFields' : ['id', 'name', 'emails']
    },

    'twitterAuth' : {
        'consumerKey'       : 'key',
        'consumerSecret'    : 'secret',
        'callbackURL'       : 'callback-url'
    },

    'googleAuth' : {
        'clientID'      : 'client',
        'clientSecret'  : 'secret',
        'callbackURL'   : 'callback-url'
    }

};
