/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Platform} from 'react-native';

import Header from './components/Header';

import HeaderStyle from './styles/HeaderStyle';

const restaurants = [
  {name: 'First', address: 'Anywhere 1'},
  {name: 'Second', address: 'Anywhere 2'},
  {name: 'Third', address: 'Anywhere 3'},
];

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Header />
      <TextInput
        style={styles.input}
        placeholder="Input text"
        onChangeText={text => {
          setSearch(text);
        }}
        value={search}
      />
      {restaurants
        .filter(
          place =>
            !search ||
            place.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
        )
        .map((place, index) => (
          <View
            key={place.name}
            style={[
              styles.row,
              {backgroundColor: index % 2 !== 0 && '#F3F3F3'},
            ]}>
            <View style={styles.edges}>
              <Text>{index + 1}</Text>
            </View>

            <View style={styles.nameAddress}>
              <Text>{place.name}</Text>
              <Text style={styles.address}>{place.address}</Text>
            </View>

            <View style={styles.edges}>
              <Text>Info</Text>
            </View>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    color: 'grey',
  },
  row: {
    flexDirection: 'row',
  },
  edges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  nameAddress: {
    flex: 8,
    flexDirection: 'column',
  },
  input: {
    padding: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
  },
});

export default App;
