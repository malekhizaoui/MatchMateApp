import {Platform} from 'react-native';

let BaseUrl = '';

{
  Platform.OS == 'android'
    ? (BaseUrl = 'http://localhost:3009/api/v1')
    : (BaseUrl = 'http://localhost:3009/api/v1');
}
// {
//  Platform.OS == 'android'
// ? (BaseUrl = 'http://217.182.207.129:8000/api/v1')
// : (BaseUrl = 'http://217.182.207.129:8000/api/v1');
// }
// {
//   Platform.OS == 'android'
//     ? (BaseUrl = 'http://192.168.0.6:5645')
//     : (BaseUrl = 'http://192.168.0.6:5645');
// }
//{
//Platform.OS == 'android'
//? (BaseUrl = 'http://10.94.145.232:3003')
//  : (BaseUrl = 'http://localhost:3003');
// }
// {
//   Platform.OS == 'android'
//     ? (BaseUrl = 'http://localhost:3003')
//     : (BaseUrl = 'http://localhost:5645');
// }

export default BaseUrl;