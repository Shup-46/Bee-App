import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data =[
    {
        id: '123',
        title : "Get a Drone",
        image:"https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: '456',
        title : "Order for parcel",
        image : "https://links.papareact.com/28w",
        screen: "EatsScreen",

    },
   
];
const NavOption = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
  return (
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
     
    renderItem={({ item }) => (
        <TouchableOpacity
        onPress={() => navigation.navigate(item.screen)}
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 h-60 w-40 m-2`}
        disabled={!origin}
        >
               <View style={[tw`flex-1`, !origin && tw`opacity-20`]}>
                   <Image
                    style ={{width: 120, height: 120, resizeMode: "contain"}}
                    source = {{ uri: item.image}}
                   />
                   <Text style={tw`mt-2  font-semibold`}>{item.title}</Text>

                   <Icon
                   style={tw`p-2 bg-black  rounded-full w-10 mt-4`}
                    name='arrow-right-circle'
                    type='feather'
                    color='white'
                   />
                     
               </View>


        </TouchableOpacity>
    )}
    />
  );
};

export default NavOption;

