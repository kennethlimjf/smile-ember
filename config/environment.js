/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'smile-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
          'default-src': "'none'",
          'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
          'font-src': "'self'",
          'connect-src': "'self'",
          'img-src': "'self'",
          'report-uri':"'localhost'",
          'style-src': "'self' 'unsafe-inline'",
          'frame-src': "'none'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['torii'] = {  
    providers: {
      'facebook-oauth2': {
        apiKey: '963012110405020',
        redirectUri: 'http://localhost:4200'
      },
      'google-oauth2': {
        apiKey: '243939248053-kbrb0feonr1o7dnieu0v65ag9m21t0ia.apps.googleusercontent.com',
        scope: 'profile',
        redirectUri: 'http://localhost:4200'
    }
    }
};  
}

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['torii'] = {  
    providers: {
      'facebook-oauth2': {
        apiKey: '1116873128340258',
        redirectUri: 'http://www.cambodiansmiles.com/'
      },
      'google-oauth2': {
        apiKey: '243939248053-kbrb0feonr1o7dnieu0v65ag9m21t0ia.apps.googleusercontent.com',
        scope: 'profile',
        redirectUri: 'http://cambodiansmiles.com/'
    }
    }
};
  }
  return ENV;
};
