module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      [
        'module-resolver',
        {
          alias: {
            '~components': './Components',
            '~redux': './Redux',
            '~theme':'./Theme',
            '~types':'./Types',
            '~utils':'./Utils',
            '~hooks':'./Hooks',
            '~hocs':'./HOCs',
            '~images':'./assests/images',
            '~globalStyles':'./GlobalStyles'
          },
        },
      ],
    ]
  };
};
