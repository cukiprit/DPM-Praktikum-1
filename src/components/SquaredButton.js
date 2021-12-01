import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const SquaredButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).btn, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = (size) => StyleSheet.create({
  btn: {
    borderRadius: 5,
    width: size,
    height: size,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: size / 2,
  }
});