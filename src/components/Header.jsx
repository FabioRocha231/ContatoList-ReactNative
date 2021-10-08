import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ titulo }) => (
  <View style={container}>
    <Text style={title}>{titulo}</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#6ca2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: '#fff',
  },
});
const { container, title } = style;

export default Header;
