import React from 'react';
import {View, Dimensions} from 'react-native';
import RouteMap from "../../components/RouteMap";
import DroneTypes from "../../components/DroneTypes";

const SearchResults = (props) => {
    
    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
        <View style={{height: Dimensions.get('window').height - 400}}>
            <RouteMap/>

        </View>
        <View style={{height: 400, backgroundColor: "#c0c0c0"}}>
          <DroneTypes/>

        </View>
        </View>
    );

};

export default SearchResults;