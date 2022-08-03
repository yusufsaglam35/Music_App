import { StyleSheet, View, FlatList,SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import musicData from './music.json';
import MusicComponent from './components/musicCard';
import Text_Input from './components/seachBox';

const App = () =>  {
  const [list, setlist] = useState(musicData);

  const renderSong =({item}) =>  <MusicComponent  song={item}/>;

  const Itemseperator = () => <View style={styles.separator} />

  //SEARCHBOX :
  const handle_Seach =  text => {
    const filter_Data = musicData.filter(song =>{
      const seached_Text = text.toLowerCase();
      const current_Text = song.title.toLowerCase();
    
     return current_Text.indexOf(seached_Text) > -1;

    });
    setlist(filter_Data);
  }

    return (
      <SafeAreaView>
        <Text_Input Search_Box ={handle_Seach}/>
      <FlatList
       keyExtractor={item => item.id}
       data={list}
       renderItem={renderSong}
       ItemSeparatorComponent={Itemseperator}
        
        />
      </SafeAreaView>
    )
  
}
const styles = StyleSheet.create({
   separator:{
    borderWidth:1,
    borderColor:'#e0e0e0',

  }
});
export default App;



