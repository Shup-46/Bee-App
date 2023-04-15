import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
enterBox:{
     backgroundColor: "#b0b0b0",
     margin: 10,
     padding: 10,
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',

},
enterText:{
    fontSize: 20,
    fontWeight: "500",
    color: "black",


},
timeContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    backgroundColor: "#fff",
    borderRadius: 30,
    
    


},
row:{
   flexDirection: "row",
   alignItems: "center",
   padding: 20,
   borderBottomWidth: 1,
   borderColor: "#dbdbdb"
},
iconContainer:{
   backgroundColor:"#b3b3b3",
   padding: 10,
   borderRadius: 25,

},
destinationText:{
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 16,
},


});

export default styles;