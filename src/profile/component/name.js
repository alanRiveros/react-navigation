import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { withNavigation } from 'react-navigation'

function Name(props) {
  return (
    <View>
      <Text>ola ke ase {props.navigation.getParam('name')}</Text>
    </View>
  )
}

export default withNavigation(Name)