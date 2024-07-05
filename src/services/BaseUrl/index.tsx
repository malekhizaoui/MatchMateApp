import {Platform} from 'react-native';

let BaseUrl = '';

{
  Platform.OS == 'android'
    ? (BaseUrl = 'http://192.168.1.112:3009/api/v1')
    : (BaseUrl = 'http://192.168.1.112:3009/api/v1');
}
// 192.168.1.112

export default BaseUrl;