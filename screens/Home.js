import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,TouchableOpacity} from 'react-native'

const Home = ({navigation}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("LocationList")} style={styles.back}>
            {/* <Text>Home Screen</Text> */}
            <View style={{flex:0.35,justifyContent: 'center',alignItems: 'center',}}>
                {/* <ImageBackground source={require("../assets/fingerprint.png")} resizeMode="contain" style={{width:120,height:120,}} >

                </ImageBackground> */}
                <Image source={require("../assets/fingerprint.png")} resizeMode="contain" style={{width:120,height:120,position:"absolute",tintColor:"white",opacity:0.7 ,transform: [{rotate: '15deg'}]}}  />
                <Text style={styles.txt2}>I Was Here </Text>
                <Text style={styles.txt3}>Project </Text>
            </View>
            <View style={{flex:0.65,alignItems: 'center',paddingTop:"10%"}}>
                <Text style={styles.txt}>Welcome to the I was </Text>
                <Text style={styles.txt}> here project </Text>
                <Text style={styles.txt}>augmented reality</Text>
                <Text style={styles.txt}>experience</Text>
               
                <Text style={[styles.txt,{marginTop:25}]}>When the app loads,   </Text>
                <Text style={styles.txt}>check what location</Text>
                <Text style={styles.txt}>you are near and find</Text>
                <Text style={styles.txt}>the thumbprint logo to</Text>
                <Text style={styles.txt}> view your <Text style={{textTransform:"uppercase"}}>AR</Text></Text>
                <Text style={styles.txt}> experience</Text>
            </View>

        </TouchableOpacity>
    )
}

export default Home

const styles = StyleSheet.create({
    back:{
        flex:1,
        paddingTop:40,
        backgroundColor:"rgb(37,33,34)"
    },
    txt:{
        color:"white",
        fontSize:20,
        textAlign:"center",
        width:"70%",
       textTransform:"capitalize"
    },
    txt2:{
        color:"white",
        fontSize:23,
        textAlign:"center",
        width:"70%",
       textTransform:"uppercase",
       fontWeight:"bold",
        letterSpacing:3, 
    },
    txt3:{
        color:"white",
        fontSize:18,
        textAlign:"center",
        width:"70%",
       textTransform:"uppercase",
       fontWeight:"bold",
        letterSpacing:4, 
    }
})
