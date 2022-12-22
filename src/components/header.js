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
const Header = () => {
  return (
    <View>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
          }}>
          <Text style={{color: '#000', fontSize: 25, fontWeight: '500'}}>
            Friends
          </Text>
          <Text style={{color: '#000'}}>Search</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f0f0f0',
          }}>
          <Pressable>
            <Text
              style={{
                color: '#000',
                padding: 10,
                marginRight: 10,
                borderRadius: 90,
                backgroundColor: '#f0f0f0',
                fontWeight: '500',
              }}>
              Suggestions
            </Text>
          </Pressable>
          <Pressable>
            <Text
              style={{
                color: '#000',
                padding: 10,
                marginRight: 10,
                borderRadius: 90,
                backgroundColor: '#f0f0f0',
                fontWeight: '500',
              }}>
              Your Friends
            </Text>
          </Pressable>
        </View>
      </View>
      <View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: '#000', fontWeight: '500', fontSize: 20}}>
            Friend Requests
          </Text>
          <Text style={{color: '#000'}}>See All</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
