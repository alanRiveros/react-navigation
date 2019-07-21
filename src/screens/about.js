import React, { Component } from 'react'
import{
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

class About extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Profile', {
      name: 'AlanRiveros'
    })
  }
  render() {
    return(
      <View style={styles.container}>
        <Text>About</Text>
        <Button 
          title="ir al Profile"
          onPress={this.handlePress}
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

export default About