import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';

const Detail = ({navigation}) => {
  return (
    <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('Home') } style={{flexDirection: 'row', marginHorizontal: 8}}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: 'red',
            marginTop:16,
          }}>
          <Image source={{uri :'https://icons8.com/icon/85459/left'}} style={{width:300,height:300}} />
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 16,
            marginTop: 25,
          }}>
          Kembali
        </Text>
      </TouchableOpacity>

      {/*Bagian Deskripsi makanan  */}
      <View style={{marginHorizontal: 8}}>
        <Image
          source={require('../assets/images/burger.jpg')}
          style={{width: 'auto', height: 340, borderRadius: 12, marginTop: 16}}
        />
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: 'black', fontSize: 22, fontWeight: 'bold'}}>
            Krabby Patty
          </Text>
          <Text style={{color: 'red', fontSize: 22, fontWeight: 'bold'}}>
            Rp 10.000
          </Text>
        </View>
        <Text style={{color: '#B4B4B0', alignItems: 'center', marginTop: 16}}>
          Krabby Patty merupakan makanan sejenis burger yang terdapat dalam
          serial kartun SpongeBob SquarePants. Lapisan roti, sayuran, dan daging
          ini dijual di Krusty Krab, restoran milik Mr. Krab, tempat Spongebob
          bekerja. Kini kantin Multistudi menyediakan menu baru yaitu Krabby
          Patty.
        </Text>
      </View>
      {/*Bagian Deskripsi makanan end*/}

      {/* Bagian profile orng */}
      <View
        style={{height: 8, backgroundColor: '#e2e2e2', marginTop: 16}}></View>
      <View style={{justifyContent:'space-between', flexDirection:'row',marginHorizontal: 8}}>
        <TouchableOpacity
          style={{flexDirection: 'row', marginTop: 16, }}>
          <Image
            source={require('../assets/images/human.png')}
            style={{width: 60, height: 60}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              marginLeft: 16,
              marginTop: 12,
              fontWeight: 'bold',
            }}>
            Kantin 3
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
             <Image
            source={require('../assets/images/messenger.png')}
            style={{width: 30, height: 30, marginTop: 32, marginRight:16}}/>
          </TouchableOpacity>
        
        </View>
      </View>

      <View
        style={{height: 8, backgroundColor: '#e2e2e2', marginTop: 16}}></View>

      {/* Bagian profile orng end */}

      {/*Bagian pesan  */}
      <View style={{marginHorizontal: 8}}>
        <Text style={{color: 'black', fontSize: 16, marginTop: 32}}>
          Masukkan jumlah pesanan
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 12,
            marginTop: 16,
            color: 'black',
            paddingHorizontal:16,
          }}placeholder='Maksimal pesanan Unlimited' placeholderTextColor={'#b4b4b0'}
        />
        <Text style={{color: 'black', fontSize: 16, marginTop: 32}}>
          Catatan
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 12,
            marginTop: 16,
            color: 'black',
            paddingHorizontal:16,
          }} placeholder='Request ente' placeholderTextColor={'#b4b4b0'}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Confrim')}
          style={{
            backgroundColor: 'red',
            height: 60,
            alignItems: 'center',
            marginHorizontal: 16,
            marginTop: 56,
            marginBottom: 16,
            padding: 16,
            borderRadius: 12,
          }}>
          <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
           Konfirmasi Pesanan
          </Text>
        </TouchableOpacity>
      </View>
      {/*Bagian pesan end*/}
    </ScrollView>
  );
};

export default Detail;
