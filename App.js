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
} from 'react-native';

import Item from './src/components/item';
import Friends from './src/screens/screenA';
const App = () => {
  return (
    <View style={styles.container}>
      <Friends />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    width: '100%',
    height: '100%',
    color: '#000',
  },
});

export default App;
