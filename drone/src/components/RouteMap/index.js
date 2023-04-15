import React from 'react';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAPS_APIKEY='AIzaSyAY0P6Fqm9Soyqs5-iQ8ttn49mg8qDae64';
const RouteMap = (props) => {

    const origin = {latitude: 28.450627, longitude: -16.263045};
    const destination = {latitude: 28.460127, longitude: -16.269045};

    return (

        <MapView
        style={{height:"100%",width:"100%"}}
        provider={ PROVIDER_GOOGLE }
          initialRegion={{
            lattitude:28.450627,
            longitude:-16.263045,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
        }}
        >
        <MapViewDirections
         origin={origin}
         destination={destination}
         apikey={GOOGLE_MAPS_APIKEY}
         strokeWidth={5}
         strokeColor="black"
         />
    <Marker
      coordinate={origin}
      title={"Origin"}
    />

    <Marker
      coordinate={destination}
      title={"Destination"}
    />
       
   </MapView>
      
  );

};

export default RouteMap ;