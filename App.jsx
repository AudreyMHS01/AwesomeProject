import { View, Text, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    //Parent
    <View>
      {/* Children*/}
      <View style={{
        backgroundColor: 'red',
        flexDirection:'row',
        height: 60, 
        alignItems :'center',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        borderRadius: 40,
        justifyContent: 'space-between'
      }}>
        <Image source = {require ('./src/assets/images/ayam_mhs.png')} style={{width: 150, height: 35 }} />
        <View style={{backgroundColor: 'blue', width: 40, height: 40, borderRadius: 5}}></View>
      </View>
      {/* Kantin */}
      <View style={{margin: 16}}>
      <Text>Selamat datang di</Text>
      <Text style={{fontSize:32, color: 'black', fontWeight:'bold'}}>Kantin Multistudi</Text>
      </View>

      {/*Image 1*/}
      <View style={{ flexDirection:'row'}}>
      {/* 1 */}
      <View style={{ marginTop: 32, borderWidth: 1,
          padding: 12, flex:1}}>
            
        <View style={{
          backgroundColor:'blue',
          height: 200,
          borderRadius:12,
          flexDirection:'row',
          }}>
        </View>
          <Text style={{fontWeight:'bold', fontSize: 16, color:'black'}}>Burger</Text>
          <Text style={{color: 'red'}}>Rp.10.000</Text>

      </View>

      {/* 2 */}
      <View style={{ marginTop: 32, borderWidth: 1,
          padding: 12, flex:1}}>
            
        <View style={{
          backgroundColor:'blue',
          height: 200,
          borderRadius:12,
          flexDirection:'row',
          }}>
        </View>
          <Text style={{fontWeight:'bold', fontSize: 16, color:'black'}}>Burger</Text>
          <Text style={{color: 'red'}}>Rp.10.000</Text>

      </View>
      </View>
      
      {/* <View style={{marginTop: 32, flexDirection: 'row'}}>
      <Image source = {require ('./src/assets/images/daijin.jpg')} style={{width: 190, height: 180, borderRadius:12, }} /> 
       <Image source = {require ('./src/assets/images/daijin.jpg')} style={{width: 190, height: 180, borderRadius:12, }} /> 
       </View> */}
    </View>
  )
}

export default App