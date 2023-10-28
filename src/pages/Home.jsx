import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
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
        <Image source = {require ('../assets/images/ayam_mhs.png')} style={{width: 150, height: 35 }} />
        <Image source = {require ('../assets/images/menu.png')} style={{width: 25, height: 25 }} />
        
      </View>
      {/*================================ Kantin======================================================= */}
      <View style={{margin: 16}}>
      <Text>Selamat datang di</Text>
      <Text style={{fontSize:32, color: 'black', fontWeight:'bold'}}>Kantin Multistudi</Text>
      </View>
      <Text style={{marginHorizontal: 16, marginTop:33, color:'black', fontWeight: 'bold', fontSize:16}}>Menu Makanan</Text>
      
      {/*=================================Image 1=======================================================*/}
      <View style={{ flexDirection:'row'}}>
      {/*====================================== 1 =======================================================*/}
      
      <TouchableOpacity  onPress={() => navigation.navigate('Detail')} style={{ marginTop: 8, flex:1, marginHorizontal:16}}>
            
        <View style={{flexDirection: 'row'}}>
      <Image source = {require ('../assets/images/burger.jpg')} style={{width: 190, height: 180, borderRadius:12, }} /> 
       </View>
          <Text style={{fontWeight:'bold', fontSize: 16, color:'black'}}>Kraby Patty</Text>
          <Text style={{color: 'red', marginTop:10,}}>Rp.10.000</Text>
      </TouchableOpacity>
      

      {/* ==============================2=============================================================== */}
        <View style={{ marginTop: 8, flex:1, marginHorizontal:16}}>
            
        <View style={{flexDirection: 'row'}}>
      <Image source = {require ('../assets/images/mie_ayam.jpg')} style={{width: 190, height: 180, borderRadius:12, }} /> 
        </View>
          <Text style={{fontWeight:'bold', fontSize: 16, color:'black'}}>Mie Ayam</Text>
          <Text style={{color: 'red', marginTop:10,}}>Rp.12.000</Text>
        </View>
      </View>

      <Text style={{marginHorizontal: 16, marginTop:33, color:'black', fontWeight: 'bold', fontSize:16}}>Menu Makanan</Text>
      
{/*=============================================Image 2=================================================*/}
<View style={{ flexDirection:'row'}}>
      {/*======================================= 1 =====================================================*/}
      <View style={{ marginTop: 8, flex:1, marginHorizontal:16}}>
            
        <View style={{flexDirection: 'row'}}>
      <Image source = {require ('../assets/images/es_jeruk.jpg')} style={{width: 190, height: 180, borderRadius:12, }} /> 
       </View>
          <Text style={{fontWeight:'bold', fontSize: 16, color:'black'}}>Es Jerrukk</Text>
          <Text style={{color: 'red', marginTop:10,}}>Rp.10.000</Text>
      </View>

      {/*===============================2 ========================================================*/}
        <View style={{ marginTop: 8, flex:1, marginHorizontal:16}}>
            
        <View style={{flexDirection: 'row'}}>
      <Image source = {require ('../assets/images/jussss.jpg')} style={{width: 190, height: 180, borderRadius:12, }} /> 
        </View>
          <Text style={{fontWeight:'bold', fontSize: 16, color:'black'}}>Jus</Text>
          <Text style={{color: 'red', marginTop:10,}}>Rp.12.000</Text>
        </View>
      </View>

      
    </View>
  )
}

export default Home