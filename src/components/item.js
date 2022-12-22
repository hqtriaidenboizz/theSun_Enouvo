import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  Alert,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Users from '../assets/data/user';

const Item = ({data, deleteItem}) => {
  const WaringAlert = id =>
    Alert.alert('Warning!', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => deleteItem(id)},
    ]);
  return (
    <View key={data.id} style={styles.container}>
      <View style={{backgroundColor: '#f0f0f0', borderRadius: 90}}>
        <Image style={styles.image} source={data.avatar} />
      </View>
      <View style={styles.right}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={[styles.text, {fontWeight: 'bold'}]}>{data.name}</Text>
            <Text style={[styles.text, {fontWeight: '400'}]}>
              Followed by 15k
            </Text>
          </View>
          <Text style={styles.text}>47w</Text>
        </View>
        <View style={styles.layoutbtns}>
          <Pressable style={[styles.btn, {backgroundColor: '#1876f2'}]}>
            <Text style={{color: '#fff', fontSize: 15}}>Confirm</Text>
          </Pressable>
          <Pressable
            onPress={() => WaringAlert(data.id)}
            style={[styles.btn, {backgroundColor: '#f0f0f0'}]}>
            <Text style={{color: '#000', fontSize: 15}}>Delete</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  right: {
    width: width - 30 - 100 - 10,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  layoutbtns: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 90,
    borderWidth: 0.7,
  },
  text: {
    color: '#000',
  },
  btn: {
    width: (width - 30 - 100 - 15) / 2,
    height: 40,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Item;
