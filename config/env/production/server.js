// Path: ./config/env/production/server.js`

// module.exports = ({ env }) => ({
//   url: env("RENDER_EXTERNAL_URL"),
//   dirs: {
//     public: "/data/public"
//   },
//   });
  
module.exports = ({ env }) => ({
  proxy: true,
  url: env('HOST_URL'), // Sets the public URL of the application.
  app: {
    keys: env.array('APP_KEYS')
  },
});