import React, { useContext, useEffect, useState } from 'react';
import { YaMap, Marker } from 'react-native-yamap';
import PinOrderSVG from '../../assets/Icons/svg/TabsIcon/PinOrderSVG';
import { usePalette } from '../../assets/color-palette/ThemeApp';
import { useColorScheme } from 'react-native';
import { AuthContext } from '../../services/Context/AuthContext';
import Geolocation from '@react-native-community/geolocation';

interface StadiumLocationMapComponentProps {
    stadium: any;
}

const StadiumLocationMapComponent = ({ stadium }: StadiumLocationMapComponentProps) => {
    const palette = usePalette();
    const colorScheme = useColorScheme();
    const { lightModeStatus } = useContext(AuthContext);
    const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });

    const nightModeStatus = lightModeStatus === 'light'
        ? false
        : lightModeStatus === 'dark'
        ? true
        : colorScheme === 'dark'
        ? true
        : false;



    return (
        <YaMap
            userLocationIcon={{ uri: "https://e7.pngegg.com/pngimages/1004/201/png-clipart-computer-icons-pin-location-pin-logo.png" }}
            nightMode={nightModeStatus}
            style={{ flex: 1 }}
            showUserPosition={true}
            initialRegion={{
                lat: parseFloat(stadium.latitude),
                lon: parseFloat(stadium.longitude),
                zoom: 12,
                azimuth: 20,
                tilt: 100,
            }}
            userLocationAccuracyFillColor="rgba(0, 150, 255, 0.1)"
            userLocationAccuracyStrokeColor="rgba(0, 150, 255, 0.8)"
            userLocationAccuracyStrokeWidth={2}
        >
            <Marker
                key={stadium.id}
                visible={true}
                point={{
                    lat: parseFloat(stadium.latitude),
                    lon: parseFloat(stadium.longitude),
                }}
            >
                <PinOrderSVG
                    color={palette.primaryColor}
                    order={stadium.id}
                />
            </Marker>
            {userLocation.latitude !== 0 && userLocation.longitude !== 0 && (
                <Marker
                    key="user-location"
                    visible={true}
                    point={{
                        lat: userLocation.latitude,
                        lon: userLocation.longitude,
                    }}
                >
                    <PinOrderSVG
                        color={palette.secondaryColor}
                        order="My location"
                    />
                </Marker>
            )}
        </YaMap>
    );
};

export default StadiumLocationMapComponent;
