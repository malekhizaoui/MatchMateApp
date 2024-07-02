import {Platform} from 'react-native';

let BaseUrl = '';

{
  Platform.OS == 'android'
    ? (BaseUrl = 'http://16.171.175.193:3009/api/v1')
    : (BaseUrl = 'http://16.171.175.193:3009/api/v1');
}

export default BaseUrl;