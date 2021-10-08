import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContext } from 'react-navigation';

import { toCapitalize } from '../util';

const PeopleListItem = ({ pessoa, navigateToPeopleDetail }) => {
  const { title, first, last } = pessoa.name;
  const { thumbnail } = pessoa.picture;
  return (
    <TouchableOpacity
      onPress={() => {
        navigateToPeopleDetail({ pessoa });
      }}
    >
      <View style={line}>
        <Image style={avatar} source={{ uri: `${thumbnail}` }} />
        <Text style={lineText}>{`${title} ${first} ${last}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#bbb',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 6,
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50,
  },
});
const { line, lineText, avatar } = styles;

export default PeopleListItem;
