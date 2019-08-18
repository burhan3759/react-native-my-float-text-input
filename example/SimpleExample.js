import React, { Component } from 'react';
import { TextInput  } from 'react-native'

import MyFloatTextInput from '../MyFloatTextInput'

export default class SimpleExample extends Component {
  render() {
    return (
      
      <MyFloatTextInput title={each.placeholder}>
        
        <TextInput 
          value={"value here"}
          onChangeText={() => console.log('on change')}
          style={{ width: '100%' }}
        />
      
      </MyFloatTextInput>
    );
  }
}
