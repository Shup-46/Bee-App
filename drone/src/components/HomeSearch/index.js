import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native'
import styles from './styles.js';

const HomeSearch = (props) => {

    return (
    <View>
     {/*INPUT BOX */}
     <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </Pressable>


    {/*Previous destination*/}
    <View style = {styles.row}>
        <View style={styles.iconContainer}>
           <AntDesign name ={"clockcircle"} size={16} color={"#ffffff"}/>
        </View>
        <Text style={styles.destinationText}>Spin Night Club</Text>
     </View>


    {/*Home destination*/}
    <View style = {styles.row}>
        <View style={[styles.iconContainer, {backgroundColor : "blue"}]}>
           <Entypo name ={"home"} size={20} color={"#ffffff"}/>
        </View>
        <Text style={styles.destinationText}>Home</Text>
     </View>
    </View>
    );

};

export default HomeSearch;