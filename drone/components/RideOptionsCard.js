import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from "twrnc";
import { selectTravelTimeInformation } from '../slices/navSlice';
const data = [
  {
    id: "0",
    title : "Heavy Disposal",
    multiplier: 1,
    image : "https://links.papareact.com/3pn",

    
  },
  {
    id: "1",
    title : "Less  Disposal",
    multiplier: 1,
    image : "https://links.papareact.com/3pn",

    
  },
  {
    id: "2",
    title : "Sending Parcel",
    multiplier: 1,
    image : "https://links.papareact.com/3pn",

    
  },
]

const SURGE_CHARGE_RATE = 1.5;
const RideOptionsCard = () => {
  const navigation  = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation  = useSelector(selectTravelTimeInformation);



  return (
    <SafeAreaView style= {tw`text-center bg-blue-100  py-5 text-xl`}> 
    <View>
    <TouchableOpacity
     onPress={()=> navigation.navigate("NavigateCard")}
     style={tw`absolute top-3 left-3 z-50 p-3`}>
    <Icon name='chevron-left' type='fontawesome'/>
    </TouchableOpacity>
    <Text style={tw`text-center py-5 text-lg`}>Select your service - {travelTimeInformation?.duration?.text}</Text>
    </View>
    <FlatList  data={data}
    keyExtractor={(item) => item.id}
    renderItem={({item:{id, title, multiplier, image}, item})=>(
       <TouchableOpacity 
       onPress={()=> setSelected(item)}
       style={tw`flex-row justify-between items-center  p-0 ${id === selected?.id && "bg-gray-200"}`}>
        <Image
          style = {{width:80, height:80, resizeMode: "contain", }} source ={{uri:"https://links.papareact.com/3pn"}}
        />
        <View style = {tw`-ml-10`}>
          <Text style = {tw` font-bold`}>{title}</Text>
          <Text>{travelTimeInformation?.duration?.text} Flight time</Text>
        </View>
        <Text style = {tw`pr-6`}>
          {new Intl.NumberFormat('en-gb', {style: 'currency', currency:"BDT"}).format((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier)/108)}
        </Text>
       </TouchableOpacity>
    )}
      
    />

  <View style={tw`mt-auto border-t border-red-200`}>

    <TouchableOpacity disabled={!selected} style={tw`bg-blue-900 py-2 m-3 ${!selected && "bg-gray-300"}`}>
      <Text style ={tw`text-center text-white text-lg`}>
        Confirm {selected?.title}
      </Text>
    </TouchableOpacity>
  </View>


    </SafeAreaView>
     
  
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});