import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';

import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() {
    const URL = 'https://randomuser.me/api/?nat=br&results=50';
    this.setState({ loading: true });
    axios
      .get(URL)
      .then((res) => {
        const { results } = res.data;
        this.setState({
          peoples: results,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: true,
        });
      });
  }

  renderLoading = (<ActivityIndicator size="large" color="#6ca2f7" />);

  render() {
    return (
      <View style={container}>
        {this.state.loading ? (
          this.renderLoading
        ) : this.state.error ? (
          <View style={error}>
            <Text style={errorMessage}>Ops ... Algo deu errado =/</Text>
          </View>
        ) : (
          <PeopleList
            pessoas={this.state.peoples}
            onPressItem={(pageParams) => {
              this.props.navigation.navigate('PeopleDetail', pageParams);
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    width: 200,
    height: 70,
    backgroundColor: '#FF6978',
    alignSelf: 'center',
    borderRadius: 12,
  },
  errorMessage: {
    marginTop: 5,
    padding: 5,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 18,
  },
});

const { container, error, errorMessage } = styles;
