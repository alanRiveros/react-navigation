import React, { Component } from 'react'
import{
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

import Name from '../profile/component/name'

class Profile extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Home')
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: `${navigation.getParam('name')} ${navigation.getParam('age', 31)}`
    }
  }
  setNombre = () => {
    this.props.navigation.setParams({
      name: 'Aloha iaia'
    })
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button 
          title="ir a la Home"
          onPress={this.handlePress}
        />
        <Button 
          title="Cambiar Nombre"
          onPress={this.setNombre}
        />
        <Name />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile