
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

/*import HomeScreen from "./src/screens/Homescreen";
const App = () => {

    return (

    <>
        <StatusBar barStyle="dark-content" />
        <HomeScreen/>
    </>*/

    /*import DestinationSearch from "./src/screens/DestinationSearch";
    const App = () => {
    
        return (
    
        <>
            <StatusBar barStyle="dark-content" />
            <DestinationSearch/>
        </>*/

import SearchResults from "./src/screens/SearchResults";
const App = () => {

    return (

    <>
        <StatusBar barStyle="dark-content" />
        <SearchResults/>
    </>

    );

};

export default App;
