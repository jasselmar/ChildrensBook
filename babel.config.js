module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@contexts': './src/contexts',
          '@models': './src/models',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
