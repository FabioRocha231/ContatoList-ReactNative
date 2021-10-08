import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PeopleListItem from './PeopleListItem';

const PeopleList = ({ pessoas, onPressItem }) => {
  return (
    <FlatList
      style={container}
      data={pessoas}
      renderItem={({ item }) => (
        <PeopleListItem pessoa={item} navigateToPeopleDetail={onPressItem} />
      )}
      keyExtractor={(item) => item.name.first}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },
});

const { container } = styles;

export default PeopleList;
