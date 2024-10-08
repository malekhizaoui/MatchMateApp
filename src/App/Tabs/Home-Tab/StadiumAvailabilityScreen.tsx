import { useCallback, useState, useRef, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Animated, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { ContainerApp, DaysContainer, ImageConainer, ImagesContent } from './StyledComponent/StyledComponent';
import DaySelectedComponent from '../../../Components/HomeComponents/DaySelectedComponent';
import NavigateBack from '../../../Components/NavigateBack';
import { Stadium } from '../../models/Stadium';
import PreviousIconSVG from '../../../assets/Icons/svg/PreviousIconSVG';
import NextIconSVG from '../../../assets/Icons/svg/NextIconSVG';
import MatchDetailComponent from '../../../Components/HomeComponents/MatchDetailComponent';
import { getWeekDaysInfo } from '../../../services/HelperFunctions';
import NoTimeSlotsComponent from '../../../Components/HomeComponents/NoTimeSlotsComponent';
import { handleRequests } from '../../../services/HandleRequests';
import { usePalette } from '../../../assets/color-palette/ThemeApp';
import { useTranslation } from 'react-i18next';

const day = getWeekDaysInfo();
export const StadiumAvailabilityScreen = ({ navigation, route }: any) => {
    const [selectedDay, setSelectedDay] = useState(day[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [stadium, setStadium] = useState<Stadium | null>(null);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const { stadiumId } = route.params;
    const palette = usePalette();
    const { t } = useTranslation();
    const [days,setDays]=useState(day)
    const retrieveTimeSlots = async () => {
        try {
            const res = await handleRequests('get', `stadium/${stadiumId}`);
            setStadium(res.data);
        } catch (error) {
            console.log('err', error);
        }
    };
    const daysInEnglish=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
console.log("day",day);

    useFocusEffect(
        useCallback(() => {
            retrieveTimeSlots();
        }, [currentImageIndex, fadeAnim, selectedDay]),
    );
    useEffect(()=>{
        const updateddays=getWeekDaysInfo()
        setDays(updateddays)
    },[])
    return (
        <ContainerApp palette={palette}>
            <NavigateBack
                navigation={navigation}
                headerTitle={t('home.stadiumAvailability.headerTitle')}
            />
            <DaysContainer
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {days.map((item, index) => (
                    <DaySelectedComponent
                        key={index}
                        item={item}
                        setSelectedDay={setSelectedDay}
                        selectedDay={selectedDay}
                    />
                ))}
            </DaysContainer>
            <ImageConainer>
                <ImagesContent>
                    <Animated.Image
                        source={{
                            uri: stadium?.imageURL
                                ? stadium.imageURL
                                : 'https://static.vecteezy.com/ti/vecteur-libre/p1/1824188-toile-de-fond-flou-abstrait-vector-gris-clair-vectoriel.jpg',
                        }}
                        style={[styles.image, { opacity: fadeAnim }]}
                    />
                    <TouchableOpacity onPress={() => { }} style={styles.arrowButton}>
                        <PreviousIconSVG color={palette.whiteColor} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={[styles.arrowButton, { right: 0 }]}>
                        <NextIconSVG color={palette.whiteColor} />
                    </TouchableOpacity>
                </ImagesContent>
            </ImageConainer>
            <ScrollView
                contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}>
                {stadium && stadium.timeSlots.length > 0 ? (
                    stadium?.timeSlots.some((timeSlot: any,index) => {
                        console.log("timeSlot.day ",timeSlot.day );
                        
                        return timeSlot.day === selectedDay.realDay;
                    }) ? (
                        // Render time slots
                        stadium.timeSlots
                            .filter((timeSlot: any) => {
                                return timeSlot.day === selectedDay.realDay;
                            })
                            .map((timeSlot: any, i: number) => (
                                <MatchDetailComponent
                                    key={i}
                                    navigation={navigation}
                                    timeSlot={timeSlot}
                                    stadium={stadium}
                                />
                            ))
                    ) : (
                        // Render NoTimeSlotsComponent if no time slots match the selected day
                        <NoTimeSlotsComponent selectedDay={selectedDay} />
                    )
                ) : (
                    // Render NoTimeSlotsComponent if there are no time slots
                    <NoTimeSlotsComponent selectedDay={selectedDay} />
                )}
            </ScrollView>
        </ContainerApp>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
    arrowButton: {
        position: 'absolute',
        top: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.54)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '8%',
        height: 30,
        borderRadius: 15,
    },
    noTimeSlotsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20, // Adjust as needed
    },
    noTimeSlotsText: {
        fontSize: 16,
        color: 'red', // Adjust color as needed
    },
});

export default StadiumAvailabilityScreen;
