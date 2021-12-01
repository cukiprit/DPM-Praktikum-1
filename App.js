import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Focus } from './src/features/Focus/Focus';

export default function App() {
  const [focSubject, setFocSubject] = useState(null);

  return (
    <View style={styles.container}>
      {focSubject ? (
        <View style={styles.res}>
          <Text style={styles.content}>
            Masukkan subject yang ingin anda lakukan
          </Text>
        </View>
      ) : (
        <Focus addSubject={setFocSubject} />
      )}
      <View style={styles.res}>
        <Text style={styles.content}>{focSubject}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8ECE7',
  },
  content: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  res: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
