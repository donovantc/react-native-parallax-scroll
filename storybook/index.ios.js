/* eslint-disable import/no-extraneous-dependencies */
import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  require('./stories');
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: '10.94.4.147' });
AppRegistry.registerComponent('ParallaxScroll', () => StorybookUI);
