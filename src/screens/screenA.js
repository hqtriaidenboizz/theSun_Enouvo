import React from 'react';
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
import ListFriend from '../container/ListFriends';

const Friends = () => {
  return (
    <View>
      <ListFriend />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default Friends;
