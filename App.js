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
import Count2 from './src/Learn/useEffect';
import Count from './src/Learn/useState';
import Friends from './src/screens/screenA';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <Friends /> */}
      <Count2/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingHorizontal: 15,
    width: '100%',
    height: '100%',
    color: '#000',
  },
});

export default App;
