import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Users from '../assets/data/user';
import Item from '../components/item';
import Header from '../components/header';
const ListFriend = () => {
  const [data, setData] = useState(Users);
  const deleteItem = id => {
    let arr = data.filter(function (item) {
      return item.id !== id;
    });
    console.log(arr);
    setData(arr);
  };
  return (
    <FlatList
      data={data}
      ListHeaderComponent={Header}
      renderItem={({item}) => <Item data={item} deleteItem={deleteItem} />}
      ListEmptyComponent={
        <View>
          <Text>...Nothing</Text>
        </View>
      }
    />
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default ListFriend;
