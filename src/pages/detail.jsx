import { View, Text } from 'react-native'
import React from 'react'

const detail = () => {
  return (
    <View>
      <View style={{height:50, width:50, borderWidth:25, backgroundColor:'red'}}>
        <Image source={{uri:'https://stock.adobe.com/id/images/icon-mit-schatten-pfeil-rechts-auskunft/178075799'}}/>
        <Text>Kembali</Text>
      </View>
      <Image source = {require ('../assets/images/burger.jpg')} style={{width: 390, height: 380, borderRadius:12,marginHorizontal:16}}/> 
    </View>
  )
}

export default detail