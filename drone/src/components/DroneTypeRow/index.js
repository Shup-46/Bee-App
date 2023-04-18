import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles.js';
import Ionicons from "react-native-vector-icons/Ionicons"
const DroneTypeRow = (props) => {
    const {type} = props;
    const getImage = () =>{

      if (type.type=== 'waste(large)'){
        return require('../../assets/images/waste(large).png');
      }
      if (type.type=== 'waste(small)'){
        return require('../../assets/images/waste(small).png');
      }
      
        return require('../../assets/images/parcel.png');

    }      
    return (

    <View style={styles.container}>
 
      <Image style ={styles.image} 
      source={getImage()}/>
     
     <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          <Ionicons name={'person'} size={16} />
          3
        </Text>
        <Text style={styles.time}>
          8:03PM taking off
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. BDT{type.price}</Text>
      </View>
    </View>
  );
};

export default DroneTypeRow;