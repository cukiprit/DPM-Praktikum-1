import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SquaredButton } from '../../components/SquaredButton';

export const Focus = ({addSubject}) => {
  const [tempItem, setTempItem] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContaier}>
        <Text style={styles.title}>Apa yang ingin Anda lakukan?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="Ketik Masukan"
            mode="outlined"
            style={{flex: 1, marginRight: 10, backgroundColor: '#fff'}}
            onSubmitEditing={
              ({ nativeEvent }) => setTempItem(nativeEvent.text)
            }
           />
          <SquaredButton size={50} title="+" onPress={ () => addSubject(tempItem) } />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  titleContaier: {
    flex: 0.5,
    padding: 25,
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
