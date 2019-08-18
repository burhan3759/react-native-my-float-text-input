import React from 'react';
import { Text, View, Platform } from 'react-native';

// will do a style in here and always allow the style to be over write
export default MyTextInput = (props) => (

  <View>

    {
      props.children.props.value != "" &&
      <Text 
        style={{ 
          zIndex: 2, marginBottom: -7, marginLeft: 10, paddingLeft: 5, paddingRight: 5, backgroundColor: '#FFF', alignSelf: 'flex-start', color: '#666666', fontSize: 12
        }}
      >
        {props.title}
      </Text>
    }

    <View
      style={{ 
        borderColor: '#CCCCCC', borderWidth: 1, width: '100%', marginBottom: 10, alignItems: 'flex-start', justifyContent: 'center', borderRadius: 5, paddingLeft: 10, padding: Platform.OS === 'ios' ? 12 : 0
      }}
      {...props}
    >
      {props.children}
    </View>
  </View>
)
