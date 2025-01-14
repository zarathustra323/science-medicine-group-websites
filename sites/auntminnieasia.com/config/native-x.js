const configureNativeX = require('@science-medicine-group/package-global/config/native-x');

const config = configureNativeX();

config.enabled = process.env.enable_native_x === 'true';

config
  .setAliasPlacements('default', [
    { name: 'default', id: '63038a522ce9ef0001e763bb' },
  ]);

module.exports = config;
