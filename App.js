import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default function App() {
  return (
    <View>
     <Header headerText = {'Albums'}/>
      <AlbumList />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
    fontSize: 40,
    borderColor: 'red'
    
  },
});
