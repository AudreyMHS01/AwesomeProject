import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'

const Detail = () => {
  return (
    <ScrollView style={{marginHorizontal:8}}>
      <TouchableOpacity style={{ flexDirection:'row',}}>
      <View style={{height:50, width:50, borderRadius:25, backgroundColor:'red', }}>
        <Image source={require ('../assets/images/Arrow white.png')} />
      </View>
      <Text style={{color:'black', fontSize:20, fontWeight:'bold', marginHorizontal:16, marginTop:14}}>Kembali</Text>
      </TouchableOpacity>

      {/*Bagian Deskripsi makanan  */}
      <View>
        <Image source={require('../assets/images/burger.jpg')} style={{width:380, height:340, borderRadius:12, marginTop:16}}/>
        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <Text style={{color:'black', fontSize:16, fontWeight:'bold'}}>Krabby Patty</Text>
        <Text style={{color:'red', fontSize:16, fontWeight:'bold'}}>Rp 10.000</Text>
        </View>
        <Text style={{color:'#B4B4B0', alignItems:'center', marginTop:16}}>Krabby Patty merupakan makanan sejenis burger yang terdapat dalam serial kartun SpongeBob SquarePants. Lapisan roti, sayuran, dan daging ini dijual di Krusty Krab, restoran milik Mr. Krab, tempat Spongebob bekerja. Kini kantin Multistudi menyediakan menu baru yaitu Krabby Patty.</Text>
        <View style={{width:380, height:1 ,backgroundColor:'#B4B4B0', marginTop:24}}></View>
      </View>
      {/*Bagian Deskripsi makanan end*/}

      {/*Bagian pesan  */}
        <Text style={{color:'black', fontSize:16, marginTop:32,}}>Masukkan jumlah pesanan</Text>
        <TextInput style={{borderWidth:1, borderRadius:12, marginTop:16, color:'black'}} />
        <Text style={{color:'black', fontSize:16, marginTop:32,}}>Catatan</Text>
        <TextInput style={{borderWidth:1, borderRadius:12, marginTop:16, color:'black'}} />
      
        <View style={{
        backgroundColor: 'red',
        height: 60, 
        alignItems :'center',
        marginHorizontal: 16,
        marginTop: 56,
        marginBottom:16,
        padding: 16,
        borderRadius: 12,
      }}>
        <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}>Masukkan jumlah pesanan</Text>
      </View>
      {/*Bagian pesan end*/}
    </ScrollView>
  )
}

export default Detail