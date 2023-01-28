import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
// import { RedTrafficLight } from './Images/traffic-light-red.png'

const TrafficSignal = () => {
    const [red, setRed] = useState(false)
    const [green, setGreen] = useState(false)
    const [yellow, setYellow] = useState(false)

const handleRed=()=>{
    setRed(true),
    setGreen(false),
    setYellow(false)
}
const handleGreen=()=>{
    setRed(false),
    setGreen(true),
    setYellow(false)
}
const handleYellow=()=>{
    setRed(false),
    setGreen(false),
    setYellow(true)
}
  

  return (
    <View>
        <View style={styles.imageContainer} >
            {!red && ! green && !yellow && 
            
            <Image source={require('./images/off.png')} style={styles.imgStyle} />
            }
            {red && ! green && !yellow && 
            
            <Image source={require('./images/red.png')} style={styles.imgStyle} />
            }
            {!red &&  green && !yellow && 
            
            <Image source={require('./images/green.png')} style={styles.imgStyle} />
            }
            {!red && ! green && yellow && 
            
            <Image source={require('./images/yellow.png')} style={styles.imgStyle} />
            }

        </View>
        <View style={styles.buttonConatiner} >

      <TouchableOpacity onPress={()=>{handleRed()}} ><Text style={[styles.buttonStyle,{backgroundColor:"red"}]} >Red</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{handleGreen()}}><Text style={[styles.buttonStyle,{ backgroundColor:"green"}]} >Green</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{handleYellow()}}><Text style={[styles.buttonStyle, {backgroundColor:"yellow"}]} >Yelow</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default TrafficSignal

const styles = StyleSheet.create({
    buttonStyle:{
        borderWidth:1,
        borderRadius:10,
        width:100,
        height:30,
        textAlign:"center",
        marginHorizontal:10,
        marginTop:400
    },
    buttonConatiner:{
        flexDirection:"row",
    },
    imageContainer:{
// width:"100%",
// aspectRatio:1
    },
    imgStyle:{
        width:"100%",
        aspectRatio:1
    }
})