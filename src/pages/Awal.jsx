import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Home from './Home'

const Awal = ({navigation}) => {
  return (
    <View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={{uri:'https://multistudi.sch.id/wp-content/uploads/2021/07/Logo-MHS-PNG35-682x1024.png'}} style={{width:150, height:225,alignSelf:'center',marginTop:280}} />
      </TouchableOpacity>
    </View>
  )
}

export default Awal