// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Dimensions,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import {

// } from './StyledComponent/StyledComponent';
// import { User } from '../../App/models/User';

// interface DemoPageComponentProps {
// onClickBtn:(value:number)=>void,
// step:number
// }

// const DemoPageComponent = ({
//     onClickBtn
// }: DemoPageComponentProps) => {
//   return (
//     <View
//         key="2"
//         style={{
//           position: 'relative',
//           flex: 1,
//           backgroundColor: .primaryColor,
//         }}>
//         <Text>Second page</Text>
//         <View
//           style={{
//             position: 'absolute',
//             width: '5%',
//             right: 0,
//             height: '100%',
//             backgroundColor: .darkBackgroundColor,
//           }}></View>
//         <View
//           style={{
//             position: 'absolute',
//             width: '50%',
//             right: -140,
//             height: '40%',
//             bottom: '10%',
//             backgroundColor: .darkBackgroundColor,
//             borderRadius: 390,
//             display: 'flex',
//             justifyContent: 'center',
//           }}>
//           <TouchableOpacity
//                     onPress={()=>goToNextPage(0)}

//             style={{
//               width: 50,
//               height: 50,
//               borderRadius: 25,
//               backgroundColor: .primaryColor,
//               marginLeft: 10,
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <NextIconSVG
//               color={.darkBackgroundColor}
//               size={'20'}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//   );
// };

// export default DemoPageComponent;
