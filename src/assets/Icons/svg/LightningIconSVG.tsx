import React from 'react';
import {
    Defs,
    LinearGradient,
    Stop,
    Text,
    Ellipse,
    TSpan,
    Svg,
    Path,
    G,
  } from 'react-native-svg';
  interface LightningIconSVG {
    color: string;
    size:string
  }
const LightningIconSVG = ({color,size}: LightningIconSVG) => {
return(
    <Svg 
 width={size} height={size} viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<G transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill={color} stroke="none">
<Path d="M4409 5101 c-103 -33 -175 -97 -222 -199 -20 -42 -23 -68 -27 -257
l-5 -210 -1485 -5 c-1649 -6 -1505 1 -1579 -72 -105 -103 -98 -283 16 -377 66
-54 108 -61 390 -61 l253 0 0 -228 0 -227 -35 -19 c-50 -27 -122 -107 -147
-163 -19 -43 -22 -72 -28 -293 -7 -267 -15 -311 -77 -404 -14 -23 -267 -365
-561 -760 -294 -396 -541 -731 -548 -745 -32 -60 -8 -153 50 -194 30 -21 40
-22 346 -27 l314 -5 16 -80 c64 -317 247 -551 535 -686 126 -59 235 -82 390
-82 153 -1 261 22 391 83 286 133 470 369 534 685 l16 80 316 5 c298 5 318 6
344 25 57 43 81 137 50 196 -8 15 -255 352 -551 749 -295 398 -547 739 -561
759 -57 87 -66 137 -73 401 -6 222 -8 249 -28 293 -26 56 -112 150 -153 167
l-30 12 0 229 0 229 949 0 950 0 3 -207 c3 -200 4 -210 29 -264 36 -76 86
-129 161 -170 62 -33 65 -34 206 -37 l142 -4 0 -1603 c0 -1444 2 -1605 16
-1619 19 -19 36 -20 52 -4 17 17 17 5079 0 5096 -20 20 -290 15 -359 -7z
m-249 -926 l0 -175 -978 0 c-747 0 -981 -3 -990 -12 -9 -9 -12 -79 -12 -252
l0 -241 -175 0 -175 0 0 240 c0 174 -3 244 -12 253 -9 9 -87 12 -287 12 -160
0 -292 4 -313 11 -21 5 -53 26 -72 45 -81 83 -63 214 38 275 30 18 79 19 1504
19 l1472 0 0 -175z m-1305 -3367 c-24 -172 -116 -348 -252 -479 -80 -78 -137
-118 -236 -164 -121 -58 -213 -78 -362 -78 -149 0 -241 20 -362 78 -96 45
-154 85 -237 164 -134 129 -227 307 -251 479 l-7 52 857 0 857 0 -7 -52z"/>
</G>
</Svg>
)
};

export default LightningIconSVG;