import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {
  render() {
    const { pessoa } = this.props.navigation.state.params;
    const { email, phone, cell, nat } =
      this.props.navigation.state.params.pessoa;
    const { city, state } = this.props.navigation.state.params.pessoa.location;
    return (
      <View style={container}>
        <Image source={{ uri: pessoa.picture.large }} style={avatar} />
        <View style={detailContainer}>
          <Line label={'Email:'} content={email} />
          <Line label={'Cidade:'} content={city} />
          <Line label={'Estado:'} content={state} />
          <Line label={'Tel:'} content={phone} />
          <Line label={'Cel:'} content={cell} />
          <Line label={'Nacionalidade:'} content={nat} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1,
    borderRadius: 500,
  },
  container: {
    padding: 15,
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1,
  },
});

const { avatar, container, detailContainer, line, cell, label } = styles;
