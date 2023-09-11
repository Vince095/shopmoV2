module.exports = ({env})=> ( {
    //
    graphql: {
      endpoint: '/graphql',
      tracing: true,
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 50,
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
      email: {
        config: {
          provider: 'sendgrid',
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: env('SENDGRID_DEFAULT_FROM'),
            defaultReplyTo: env('SENDGRID_DEFAULT_TO'),
          },
        },
      },
    },
  });