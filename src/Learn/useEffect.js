import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Switch,
  FlatList,
  Text,
  TouchableHighlight,
  SectionList,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
const Count2 = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get('https://628d8c71a339dfef879c3fac.mockapi.io/Products/1')
      .then(res => {
        setData(res.data);
      });
  };
  // getData();
  // console.log(data);
  useEffect(() => {
    getData();
    console.log('dcm');
  }, []);
  console.log(data);
  return (
    <View>
      <Text>Your: {count}</Text>
      <Text>Name: {data.price}</Text>
      <Button title="Click" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
      <Text>dadasda</Text>
    </View>
  );
};

export default Count2;
