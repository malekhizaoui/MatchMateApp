import React,{useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, StatusBar} from 'react-native';
import PagerView from 'react-native-pager-view';
import {MatchMatePalette} from '../../../assets/color-palette';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';

const DemoScreen = () => {
    const pagerRef = useRef<PagerView>(null);

    const goToNextPage = (value: number) => {
      if (pagerRef.current) {
        pagerRef.current.setPage(value);
      }
    };
  return (
    <>
    
    <PagerView style={styles.pagerView} initialPage={1} useNext={false}  ref={pagerRef}>
    <StatusBar
        barStyle={'light-content'}
        backgroundColor={MatchMatePalette.primaryColor}
      />
      <View
        key="1"
        style={{
          position: 'relative',
          flex: 1,
          backgroundColor: MatchMatePalette.darkBackgroundColor,
        }}>
        <Text>First page</Text>
        <View
          style={{
            position: 'absolute', 
            width: '2%',
            right: 0,
            height: '100%',
            backgroundColor: MatchMatePalette.primaryColor,
          }}></View>
        <View
          style={{
            position: 'absolute',
            width: 150,
            right: -140,
            height: '40%',
            bottom: '10%',
            backgroundColor: MatchMatePalette.primaryColor,
            borderRadius: 390,
            display: 'flex',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
           onPress={() => goToNextPage(1)}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: MatchMatePalette.darkBackgroundColor,
              marginLeft: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems:"center"
            }}>
            <NextIconSVG
              color={MatchMatePalette.primaryColor}
              size={'20'}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        key="2"
        style={{
          position: 'relative',
          flex: 1,
          backgroundColor: MatchMatePalette.primaryColor,
        }}>
        <Text>Second page</Text>
        <View
          style={{
            position: 'absolute',
            width: '5%',
            right: 0,
            height: '100%',
            backgroundColor: MatchMatePalette.darkBackgroundColor,
          }}></View>
        <View
          style={{
            position: 'absolute',
            width: '50%',
            right: -140,
            height: '40%',
            bottom: '10%',
            backgroundColor: MatchMatePalette.darkBackgroundColor,
            borderRadius: 390,
            display: 'flex',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
                    onPress={()=>goToNextPage(0)}

            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: MatchMatePalette.primaryColor,
              marginLeft: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <NextIconSVG
              color={MatchMatePalette.darkBackgroundColor}
              size={'20'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </PagerView>
    </>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default DemoScreen;
