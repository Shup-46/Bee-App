import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';

const Message = (props) => {

    return (

    <View style ={styles.container}>
        <Text style= {styles.title}>Travel only if it's necessary</Text>
        <Text style = {styles.text}>updating everything everytime, no matter where you go and where you live</Text>
        <Text style ={styles.learnMore}>Learn more</Text>
    </View>
    );

};

export default Message;