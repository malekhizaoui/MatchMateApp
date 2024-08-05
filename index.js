/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import i18n from './src/Language/i18n';
AppRegistry.registerComponent(appName, () => App);
