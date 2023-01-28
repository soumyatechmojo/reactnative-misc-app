import React, { Component } from 'react'
import {Button, View} from 'react-native'
import withIncrement from './withIncrement'


class ButtonComponent extends Component {
  render() {
    const {count, increment} = this.props;
    return (
      <View>
        <text>ButtonComponent to test Hoc</text>
        <Button 
            onPress={increment} title = "Press Me"
        >
            <Text>Button Pressed {count}</Text>
        </Button>
      </View>
    )
  }
}

export default withIncrement(ButtonComponent)

const styles  = StyleSheet.create({
    container:{
        flex: 1
    }
})
