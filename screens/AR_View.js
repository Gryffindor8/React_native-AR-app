import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { WebView } from 'react-native-webview'
import HTMLView from 'react-native-htmlview';
import RenderHtml from "react-native-render-html";

const AR_View = ({navigation,route}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [ARUrl, setARUrl] = useState(route.params.ARurl)

    // useEffect(() => {
    //     (async () => {
    //       const { status } = await Camera.requestPermissionsAsync();
    //       setHasPermission(status === 'granted');
    //     })();
    //   }, []);
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
    
      if (hasPermission === null) {
        return <View />;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

    if (hasPermission===true){

   console.log("Has Permisssin: ",hasPermission)
    return (

      <WebView 
      mediaPlaybackRequiresUserAction={false}
      allowsInlineMediaPlayback
      source={{ uri: ARUrl }}
       style={{ marginTop: 0 }}
       />

   
    )
  }
}

export default AR_View

const styles = StyleSheet.create({
    backCam:{
        flex:1,
        paddingTop:60,
        paddingHorizontal:20,
        paddingBottom: 10,
        // justifyContent:"space-between"
        // height:responsiveHeight(100)
    },
})

     // <View style={{flex:1}}>
        // <Camera style={styles.backCam}  ratio="16:9" type={type}>

        // </Camera>
        // </View>
//         <WebView
//     javaScriptEnabled={true}
//     style={{ flex: 1}}
//     allowsInlineMediaPlayback
//     originWhitelist={['*']}
//     source={{ html: htmlContent}}
//     injectedJavaScript={injectedJavaScript}
// />

{/* <WebView 

useWebKit
// originWhitelist={['*']}
// allowsInlineMediaPlayback={true}
// source={{ uri: "https://iamhereproject.glitch.me" }}
source={{ html: htmlContent}}
    injectedJavaScript={injectedJavaScript}
    javaScriptEnabled={true}
 style={{ marginTop: 0 }}

 originWhitelist={['*']}
 allowsInlineMediaPlayback

 scalesPageToFit
 mediaPlaybackRequiresUserAction={false}
 startInLoadingState
 javaScriptEnabledAndroid
 userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"

 />  */}

 
 
      //  <HTMLView
      //   value={htmlContent}
      //   stylesheet={styles}
      // />

    