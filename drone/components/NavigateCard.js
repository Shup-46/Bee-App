import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import tw from "twrnc";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFav from './NavFav';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-blue-50 flex-1`}>
         <Text style={tw`text-center  py-5 text-xl`}>Search Screen</Text>
         <View style={tw`border-t border-blue-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    styles={toInputBoxStyles}
                    fetchDetails ={true}
                    returnKeyType={'search'}
                    minLength={2}
                    onPress={(data, details = null)=>{
                        dispatch(
                            setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        })
                        );

                        navigation.navigate("RideOptionsCard");

                             
                    }}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language:"en",
                    }
                    }
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />
            </View>
            <NavFav/>
         </View>
         <View
         style ={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
         >
            <TouchableOpacity
            onPress={() => navigation.navigate("RideOptionsCard")}
            style={tw`flex flex-row bg-black justify-between w-44 px-4 py-3 rounded-full`}
            >
                <Icon name='trash-outline' type='ionicon' color="white" size={16} />
                <Text style ={tw`text-white text-center`}>Garbage Disposal</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => navigation.navigate("RideOptionsCard")}
            style={tw`flex flex-row bg-black justify-between w-42 px-6 py-3 rounded-full`}
            >
                <Icon name='gift-outline' type='ionicon' color="white" size={16} />
                <Text style ={tw`text-white text-center`}>Parcel Service</Text>
            </TouchableOpacity>
           


         </View>
    </SafeAreaView>
     
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({

    container:{
        backgroundColor: "white",
        padding: 20,
        flex: 0,
    },
    textInput:{
         backgroundColor:"#f0f8ff",
         color: "black",
         borderRadius: 0,
         fontSize: 18,
    },
    textInputContainer:{
        paddingHorizontal: 1,
        paddingBottom: 0,
        color: "red"

    },
}); 