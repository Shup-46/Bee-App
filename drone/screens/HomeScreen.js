import React from 'react';
import { StyleSheet, Text,View,SafeAreaView, Image} from 'react-native';
import tw from 'twrnc';
import NavOption from '../components/NavOption';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFav from '../components/NavFav';

const HomeScreen = () => {
   const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-red-50 h-full`}>
        <View style={tw`p-5`}>
          <Image 
            style ={{
              width:200,height:200,resizeMode:"contain",
            }}
            source={require('../assets/images/logo.png')}
          />
          <GooglePlacesAutocomplete
            placeholder='where from?'
            styles={{
              container:{
                flex:0,
              },
              textInput:{
                fontSize: 18,
              },
            }}
            onPress ={(data, details = null) =>{
                 dispatch(setOrigin({
                  location: details.geometry.location, 
                  description: data.description,
                 }))
                 dispatch(setDestination(null));
            }}
            fetchDetails  = {true}
            enablePoweredByContainer ={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        <NavOption/>
        <NavFav/>
        </View>
    </SafeAreaView>
      
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
       text:{
           color:"blue",
       },

});