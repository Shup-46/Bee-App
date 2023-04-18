import React from 'react';
import {Image, FlatList} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import drones from "../../assets/data/drones"

const HomeMap = (props) => {

    const getImage = (type) =>{
    
        if (type === 'waste(large)'){
          return require('../../assets/images/Drone1.png');
        }
        
        if (type === 'waste(small)'){
          return require('../../assets/images/Drone2.png');
        }
        
          return require('../../assets/images/Drone1.png');
  
      };    

    return (

      <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation ={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
        {drones.map((drone) => (
            <Marker
            key={drone.id}
            coordinate={{ latitude : drone.lattitude , longitude : drone.longitude }}
            >
            <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${drone.heading}deg`
              }]
            }}
            source={getImage(drone.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;