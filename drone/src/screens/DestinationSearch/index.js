import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import styles from './styles.js';
const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    console.warn('useEffect is called');
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);
  
  return (
    <SafeAreaView>
    <View style ={styles.dcontainer}>
    <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          
          styles={{
            textInput: styles.textInput,
            
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAY0P6Fqm9Soyqs5-iQ8ttn49mg8qDae64',
            language: 'en',
        }}
    />
        
        
    <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          
          styles={{
            textInput: styles.textInput,
            
          }}
          fetchDetails
          query={{
            key: 'AIzaSyAY0P6Fqm9Soyqs5-iQ8ttn49mg8qDae64',
            language: 'en',
          }}
         
        />
 

    
    </View>

    </SafeAreaView>

    );

};

export default DestinationSearch;