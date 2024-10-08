import { MatchMatePalette } from "../color-palette";
import { Dimensions } from 'react-native';



const { width } = Dimensions.get('window');

// Base dimensions used to calculate font sizes
const baseWidth = 375;

// Function to calculate responsive font size
const scale = (size:any) => (width / baseWidth) * size;



export const ContainerAppStyle=`
flex:1;
backgroundColor:${MatchMatePalette.darkBackgroundColor};
align-items:center;

`

export const fontSizeTitleScreen = `
font-size: ${scale(24)}px;
font-family: 'Lucida Sans Unicode';
`;

export const fontSizeSubTitleScreen = `
font-size: ${scale(20)}px;
font-family: 'Lucida Sans Unicode';

`;

export const fontSizeTextScreen = `
font-size: ${scale(15)}px;
font-family: 'Lucida Sans Unicode';

`;

export const fontSizeLegendIcon = `
font-size: ${scale(12)}px;
font-family: 'Lucida Sans Unicode';

`;

