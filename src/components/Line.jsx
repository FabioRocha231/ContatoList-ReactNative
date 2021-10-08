import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Line = ({ label = '', content = '-' }) => {
  return (
    <View style={line}>
      <Text style={[cell, negrito, label.length > 8 ? longLabel : null]}>
        {label}
      </Text>
      <Text style={[cell, conteudo]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#C5C5C5',
  },
  cell: {
    fontSize: 18,
    paddingLeft: 5,
    //borderWidth: 1,
  },
  negrito: {
    fontWeight: 'bold',
  },
  conteudo: {
    flex: 3,
  },
  longLabel: {
    fontSize: 12,
  },
});

const { line, cell, negrito, conteudo, longLabel } = styles;

export default Line;
