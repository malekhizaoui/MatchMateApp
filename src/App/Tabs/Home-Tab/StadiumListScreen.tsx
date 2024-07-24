// StadiumListScreen.tsx

import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  ContainerListStadiumScreen,
  HeaderListStadiumContainer,
  TextTypeOfRender,
  ListStadiumContainer,
  FlatListMapContainer,
} from './StyledComponent/StyledComponent';
import SearchCardComponent from '../../../Components/HomeComponents/SearchCardComponent';
import ImageListStadiumComponent from '../../../Components/HomeComponents/ImageListStadiumComponent';
import {MatchMatePalette} from '../../../assets/color-palette';
import BackIconSVG from '../../../assets/Icons/svg/BackIconSVG';
import StadiumListMapScreen from './StadiumListMapScreen';
import StadiumCardMapComponent from '../../../Components/HomeComponents/StadiumCardMapComponent';
import { Stadium } from '../../models/Stadium';


interface RouteParams {
  fieldDataPass: Stadium[];
}

interface StadiumListScreenProps {
  navigation: any;
  route: { params: RouteParams };
}

export const StadiumListScreen: React.FC<StadiumListScreenProps> = ({navigation, route}) => {
  const {fieldDataPass} = route.params;
  const [showMap, setShowMap] = useState(true);
  const [filteredStadiums, setFilteredStadiums] = useState(fieldDataPass);

  const handleSearch = (query: string) => {
    const filtered = fieldDataPass.filter((stadium) =>
      stadium.stadiumName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStadiums(filtered);
  };

  return (
    <>
      <HeaderListStadiumContainer>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={
            !showMap
              ? MatchMatePalette.darkBackgroundColor
              : MatchMatePalette.darkBackgroundColor
          }
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <BackIconSVG
            color={
              showMap
                ? MatchMatePalette.primaryColor
                : MatchMatePalette.secondaryTextColor
            }
            btnClicked={() => {
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
        <SearchCardComponent showMap={showMap} onSearch={handleSearch} />
        <TouchableOpacity
          onPress={() => {
            setShowMap(!showMap);
          }}>
          <TextTypeOfRender
            style={{
              color: showMap
                ? MatchMatePalette.primaryColor
                : MatchMatePalette.secondaryTextColor,
            }}>
            {showMap ? 'Map' : 'List'}
          </TextTypeOfRender>
        </TouchableOpacity>
      </HeaderListStadiumContainer>
      {showMap ? (
        <ContainerListStadiumScreen
          style={{
            backgroundColor: MatchMatePalette.darkBackgroundColor,
            marginTop: 0,
            paddingTop: 50,
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <ListStadiumContainer>
            <Text
              style={{
                color: MatchMatePalette.secondaryTextColor,
                fontSize: 15,
                fontWeight: '600',
                marginBottom: 10,
              }}>
              {filteredStadiums.length} listings court
            </Text>
            {filteredStadiums.map((stadium, i) => {
              return (
                <ImageListStadiumComponent
                  key={i}
                  stadium={stadium}
                  btnClicked={() => {
                    navigation.navigate('StadiumDetail', {stadium});
                  }}
                />
              );
            })}
          </ListStadiumContainer>
        </ContainerListStadiumScreen>
      ) : (
        <>
          <StadiumListMapScreen stadiums={filteredStadiums} />
          <FlatListMapContainer
            horizontal
            showsHorizontalScrollIndicator={false}>
            {filteredStadiums.map((stadium, index) => {
              return (
                <StadiumCardMapComponent
                  key={index}
                  stadium={stadium}
                  navigation={navigation}
                  index={index + 1} feedback={stadium.feedbacks}                />
              );
            })}
          </FlatListMapContainer>
        </>
      )}
    </>
  );
};
