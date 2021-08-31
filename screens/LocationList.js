import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import DATA from "../data/wayfind.json";
import axios from "axios";

const LocationList = ({navigation}) => {

    const [data, setdata] = useState(DATA)
    const [filteredData, setfilteredData] = useState(null)


    useEffect(() => {
        FetchAPI()
        
    }, [])

    function FetchAPI(){
        axios.get('http://admin.gamifi.co/wp-json/gamifi/v1/locations')
        .then(response => {
            console.log('Response', response.data)
            const dataArray = []
            const temp = response.data;
            temp.map((item,index)=>{
                const newObj = {
                    id : item.ID,
                    name: item.name,
                    // tag: item.tag,
                    // description: item.description,
                    // extensions:item.extensions,
                    // ARurl: ARList[index].ARurl,
                    ARurl: item.image_recognition_glitch,
                    thumbnail: item.icon
                }
                dataArray.push(newObj)
            })
            setfilteredData(dataArray)
        })
        .catch(e => {
            console.log('Error: ', e.response.data)
        })
    }






    function renderPlaces(item,index){
        return(
            <View 
     
            style={[styles.furn,{backgroundColor:"white",width:"100%",height:150,marginBottom:15,borderRadius:15,elevation:2,justifyContent: 'space-between',padding:10,flexDirection:"row"}]}>
                {/* {console.log("Item",item)} */}
                 <View
                 style={[styles.furn2,{elevation:1,borderRadius:25,width:"45%",height:"100%",justifyContent: 'center', alignItems: 'center',backgroundColor: "white",}]}>
                <Image source={{uri: item.thumbnail}} style={{width:"70%",height:"70%"}} resizeMode="contain" />
                </View>
                <View style={{width:"55%",padding:10,justifyContent: "space-between",}}>
                    <View>
                    <Text style={{color:"rgb(0,94,174)",fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
                    
                    </View>
         
                    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems: 'center',}}>
                    <TouchableOpacity  
                     onPress={()=>navigation.navigate("AR_View",{ARurl: item.ARurl})}
                   
                    style={{backgroundColor:"rgb(0,94,174)",padding:5,borderRadius:10,paddingHorizontal: 10,}} >
                        <Text style={{color: "white"}}>Open AR</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    if (!filteredData) {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require("../assets/loading4.gif")} style={{ width: 70, height: 70 }} resizeMode="contain" />
        </View>
    }

    return (
        <View style={styles.back}>
            {console.log("\n \n \n--------------Inside return----------------\n")}
            {/* {console.log("Json Object: ",filteredData)} */}
           
            <View style={{marginTop:0,height:"100%",padding: 20,}}>
                <FlatList
                    horizontal={false}
                   showsVerticalScrollIndicator={false}
                    keyExtractor={(item)=>item.id.toString()}
                    data={filteredData}
                    renderItem={({item,index})=>renderPlaces(item,index)}
                    
                />
            </View>
        </View>
    )
}

export default LocationList

const styles = StyleSheet.create({
    back:{
        flex:1,
        marginTop:40,
       backgroundColor:"#EEEEEE"
    },
})
