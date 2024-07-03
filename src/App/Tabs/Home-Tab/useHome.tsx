import {useEffect, useState, useContext, useRef} from 'react';
import {MatchMatePalette} from '../../../assets/color-palette';
import {Stadium} from '../../models/Stadium';
import {Field} from '../../models/Field';
import {ScrollView, StyleSheet, Text} from 'react-native';
import { handleRequests } from '../../../services/HandleRequests';

export const useHome = (navigation:any, route: any=false) => {
  // HomeScreen

  const scrollViewRef = useRef<ScrollView>(null);
  const [basketballField, setBasketballField] = useState<Stadium[]>([]);
  const [footballField, setFootballField] = useState<Stadium[]>([]);
  const [volleyballField, setVolleyballField] = useState<Stadium[]>([]);
  const [fieldDataPut, setfieldDataPut] = useState<Field[]>([]);
  const [fieldSelected, setFieldSelected] = useState('Basketball');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [searchResults, setSearchResults] = useState<Stadium[]>([]);
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState("Lausanne");


  const searchFields = (query: string) => {
    if (query.length < 3) {
      setSearchResults([]);
      return;
    }

    const allStadiums = [...basketballField, ...footballField];
    const filteredStadiums = allStadiums.filter(stadium => {
      const nameMatch = stadium.stadiumName
        .toLowerCase()
        .includes(query.toLowerCase());
      const statusMatch =
        stadium.status &&
        stadium.status.toLowerCase().includes(query.toLowerCase());
      return nameMatch || statusMatch;
    });

    setSearchResults(filteredStadiums);
  };

  const handleSearch = (valueText: string) => {
    setQuery(valueText);
    searchFields(valueText);
  };
  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text
          style={[
            styles.label,
            isFocus && {color: MatchMatePalette.primaryColor},
          ]}></Text>
      );
    }
    return null;
  };
  const updateFieldData = (index: number) => {
    const reorderedFieldData = [
      fieldDataPut[index],
      ...fieldDataPut.slice(0, index),
      ...fieldDataPut.slice(index + 1),
    ];
    setfieldDataPut(reorderedFieldData);
    setFieldSelected(fieldDataPut[index].fieldName);
    scrollViewRef.current?.scrollTo({x: 0, y: 0, animated: true});
  };


  const getFieldsBaseOnRegion = async () => {    
    try {
     const res=await handleRequests('get',`fieldRegion/${region}`)      
      setfieldDataPut(res);
      setBasketballField(res[0].stadiums);
      setFootballField(res[1].stadiums);
      setVolleyballField(res[2].stadiums);
    } catch (error) {
      console.log("err",error);
      
    }
  };

  useEffect(() => {
    getFieldsBaseOnRegion();
    
  }, [region]);
  const data = [
    {label: 'Lausanne', value: 'Lausanne'},
    {label: 'Geneva', value: 'Geneva'},
  ];

  return {
    fieldSelected,
    footballField,
    basketballField,
    volleyballField,

    renderLabel,
    isFocus,
    data,
    setIsFocus,
    setFieldSelected,
    handleSearch,
    query,
    scrollViewRef,
    fieldDataPut,
    updateFieldData,
    region,
    setRegion
    // fieldList
    
  };
};
export const styles = StyleSheet.create({
  container: {
    padding: 0,
    width: '44%',
  },
  dropdown: {
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: MatchMatePalette.primaryColor,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
export default useHome;
