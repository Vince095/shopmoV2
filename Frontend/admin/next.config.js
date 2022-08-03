
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

const nextSettings = {
    env: {
        title: 'ShopMO',
        titleDescription: 'Admin',
    },
};

module.exports = withPlugins([withImages(), nextSettings]);
