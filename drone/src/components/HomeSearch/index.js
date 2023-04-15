import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import styles from './styles.js';

const HomeSearch = (props) => {

    return (
    <View>
     {/*INPUT BOX */}
     <View style = {styles.enterBox}>
        <Text style ={styles.enterText}>Where to?</Text>
        <View style={styles.timeContainer}>
           <AntDesign name ={"clockcircle"} size={16} color={"black"}/>
           <Text>Now</Text>
           <MaterialIcons name={"keyboard-arrow-down"} size={16}/>
        </View>
     </View>


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