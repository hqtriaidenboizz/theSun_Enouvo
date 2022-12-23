import React, {useState} from 'react';
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
const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Total: {count}</Text>
      <Button title="Count" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
};

export default Count;
