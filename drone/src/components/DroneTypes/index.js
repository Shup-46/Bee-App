import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';
import DroneTypeRow from '../DroneTypeRow';
import typesData from "../../assets/data/type"

const DroneTypes = (props) => {
   const confirm =() =>{
     console.warn('confirm');
   };

    return (

    <View >
         {typesData.map((type)=>(

         <DroneTypeRow type={type}
             /*key={type.id}*/
         />
         ))}
        
    <Pressable onPress={confirm} style={{
        backgroundColor: "black",
        padding: 10,
        margin: 10,
        alignItems: 'center',

    }}>
        <Text style ={{
            color: "white",
            fontWeight: "bold",
        }}>Confirm Drone</Text>
    </Pressable>

    </View>
    );

};

export default DroneTypes;