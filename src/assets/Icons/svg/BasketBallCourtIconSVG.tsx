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
    G
  } from 'react-native-svg';
  interface BasketBallCourtIconSVG {
    color: string;
    size:string
  }
const BasketBallCourtIconSVG = ({color,size}: BasketBallCourtIconSVG) => {
  return (
    <Svg 
 width={size} height={size} viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<G transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill={color} stroke="none">
<Path d="M0 4117 l0 -294 123 -17 c415 -58 761 -304 951 -676 96 -188 137
-358 137 -575 0 -259 -64 -473 -206 -692 -77 -118 -261 -299 -378 -372 -168
-103 -373 -174 -543 -188 l-84 -6 0 -298 0 -299 1205 0 1205 0 0 548 0 547
-88 28 c-48 15 -119 46 -157 69 -90 54 -220 184 -273 273 -159 271 -138 608
53 863 105 139 264 240 453 288 9 3 12 121 12 549 l0 545 -1205 0 -1205 0 0
-293z"/>
<Path d="M2712 3864 l3 -547 55 -14 c30 -7 91 -31 135 -53 400 -198 548 -694
323 -1084 -51 -89 -189 -227 -278 -279 -36 -21 -104 -50 -152 -65 l-88 -27 0
-547 0 -548 1205 0 1205 0 0 300 0 300 -44 0 c-24 0 -81 7 -127 15 -516 91
-934 509 -1025 1025 -20 114 -19 332 1 439 78 407 343 752 707 920 119 55 234
89 371 108 l117 16 0 294 0 293 -1205 0 -1205 0 2 -546z"/>
<Path d="M0 3286 l0 -236 385 0 c218 0 385 4 385 9 0 17 -87 126 -151 189
-145 144 -350 241 -561 266 l-58 7 0 -235z"/>
<Path d="M5003 3505 c-199 -36 -371 -126 -511 -267 -69 -70 -142 -162 -142
-180 0 -4 173 -8 385 -8 l385 0 0 235 0 235 -22 -1 c-13 0 -55 -7 -95 -14z"/>
<Path d="M2418 3011 c-217 -70 -358 -293 -327 -518 36 -262 283 -447 541 -404
379 62 534 516 271 792 -67 70 -119 104 -204 130 -79 25 -204 24 -281 0z"/>
<Path d="M0 2555 l0 -195 449 0 448 0 7 51 c9 65 9 239 0 296 l-6 43 -449 0
-449 0 0 -195z"/>
<Path d="M4216 2705 c-9 -59 -9 -220 -1 -290 l7 -55 449 0 449 0 0 195 0 195
-449 0 -449 0 -6 -45z"/>
<Path d="M0 1829 l0 -232 68 6 c189 18 388 111 541 253 57 52 161 179 161 197
0 4 -173 7 -385 7 l-385 0 0 -231z"/>
<Path d="M4350 2053 c0 -5 23 -38 51 -75 101 -135 262 -257 419 -317 82 -32
209 -61 265 -61 l35 0 0 230 0 230 -385 0 c-212 0 -385 -3 -385 -7z"/>
</G>
</Svg>


  );
};

export default BasketBallCourtIconSVG;
