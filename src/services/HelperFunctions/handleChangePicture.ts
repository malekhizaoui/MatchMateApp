import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera, OptionsCommon } from 'react-native-image-picker';

let launchImageLibrary = _launchImageLibrary;
let launchCamera = _launchCamera;

const openImagePicker = () => {
    const options:OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options:OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      // setSelectedImage(imageUri);
    //   updateUser(imageUri);
    }
  };
