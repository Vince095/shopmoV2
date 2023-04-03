
module.exports = ({ env }) => ({
    url: '/dashboard',
    apiToken: {
      salt: env('API_TOKEN_SALT', '8d516acf734093325a4a025e3e6c511f'),
    },
    auth: {
      secret: env('ADMIN_JWT_SECRET', '27b5e15d00528c4c2966f3763fa44c95'),
    },
  });
  

  