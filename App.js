/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {View, Text, Image ,StyleSheet} from 'react-native';


export default class App extends Component{

  render(){

    return(
        <View       style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
  >
          <Text style={styles.titleText}>Hello World!</Text>
          <Image source={require('./src/imagens/frajola.gif')}
       style={{width: 300, height: 300}} />
    
        </View>
        

    )
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'red'
  },
});


