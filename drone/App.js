
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Router from './src/navigation/Root';

/*import HomeScreen from "./src/screens/Homescreen";
const App = () => {

    return (

    <>
        <StatusBar barStyle="dark-content" />
        <HomeScreen/>
    </>

    import DestinationSearch from "./src/screens/DestinationSearch";
    
    
        return (
    
        <>
            <StatusBar barStyle="dark-content" />
            <DestinationSearch/>
        </>

import SearchResults from "./src/screens/SearchResults";
const App = () => {

    return (

    <>
        <StatusBar barStyle="dark-content" />
        <SearchResults/>
    </>*/

    
   
    
    navigator.geolocation = require('@react-native-community/geolocation');


    /*import Amplify from "aws-amplify"
    import config from ""*/
    
    const App = () => {
    
      const androidPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "App Camera Permission",
              message:
                "App needs access to your location " +
                "so you can take awesome rides.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location");
          } else {
            console.log("Location permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      }
    
      useEffect(() => {
        if (Platform.OS === 'android') {
          androidPermission();
        } else {
          // IOS
          Geolocation.requestAuthorization();
        }
      }, [])
    
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <Router />
        </>
      );
    };
    




export default App;
