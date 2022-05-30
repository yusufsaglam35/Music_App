import { Text, StyleSheet, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import music from './music.json';
import MusicComponent from './components/musicCard';

const App = () =>  {

  const renderSong =({item}) =>  <MusicComponent  song={item}/>;
  const Itemseperator = () => <View style={styles.separator} />
    return (
      <View>

      <FlatList
       keyExtractor={item => item.id}
       data={music}
       renderItem={renderSong}
       ItemSeparatorComponent={Itemseperator}
        
        />
      </View>
    )
  
}
const styles = StyleSheet.create({
   separator:{
    borderWidth:1,
    borderColor:'#e0e0e0',

  }
});
export default App;



