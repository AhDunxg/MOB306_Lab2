import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View ,} from 'react-native';
import From from './Components/From';
class App extends Component{
  state = {
    message: "MÁY TÍNH ĐIỆN TỬ",
  };
  render(){
    return(
      <View style={{flex: 1, justifyContent:'center',alignItems:'stretch',padding:50}}>
      <From></From>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
