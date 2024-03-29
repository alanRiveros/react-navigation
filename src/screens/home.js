import React, { Component } from 'react'
import{
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'
import { StackActions } from 'react-navigation'

class Home extends Component {
  handlePress = () => {
    this.props.navigation.dispatch(StackActions.push({
      routeName: 'Login'
    }))
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>Home</Text>
        <Button 
          title="ir al login"
          onPress={ this.handlePress }
        />
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

export default Home