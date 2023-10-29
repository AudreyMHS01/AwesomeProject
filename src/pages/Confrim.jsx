import { View, Text , Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Confrim = ({navigation}) => {
  return (
    <View style={{}}>
        <Image source={require('../assets/images/checklist.png')} style={{width:150, height:150,justifyContent:'center',marginTop:200,alignSelf:'center'}} />
      <Text style={{color:'red', marginTop:32, fontSize:24, fontWeight:'bold',alignSelf:'center',}}>Pemesanan sukses!</Text>
      <Text style={{color:'black', marginTop:10, fontSize:16,alignSelf:'center'}}>Pesanan Anda sudah dikonfirmasi oleh penjual. Silahkan tunggu, pesanan akan segera disiapkan.</Text>
      
      <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: 'red',
            height: 60,
            alignItems: 'center',
            marginHorizontal: 16,
            marginTop: 280,
            marginBottom: 16,
            padding: 16,
            borderRadius: 12,
          }}>
          <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
           Konfirmasi Pesanan
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Confrim