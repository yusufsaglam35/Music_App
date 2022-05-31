import { Text, StyleSheet, View,TextInput } from 'react-native'
import React, { Component } from 'react'

const seach_Box = (props) => {
    return (
      <View style = {styles.container}>
        <TextInput
        placeholder='Search ..'
        onChangeText={props.Search_Box}
        />
      </View>
    )
  
}
export default seach_Box;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f0f0f0',
        padding:5,
        margin:7,
        borderRadius:10,
    }
})