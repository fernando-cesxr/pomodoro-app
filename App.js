

import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react'


export default function App() {

  const [ timer, setTimer ] = useState(300)
  const [ isActive, setIsActive ] = useState(false)
  const countRef = useRef(0);

  function handleStart(){
    setIsActive(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)
  }

  function handleStop(){
    clearInterval(countRef.current)
    setIsActive(false)
  }

  function handleReset(){
    setTimer(300)
  }

  function formatTime(x){
    const minutes = Math.floor(x/60)
    const seconds = x % 60
    return`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <SafeAreaView style={styles.container}>
      <View> 
        <Text style={styles.title}>Hora de Trabalhar</Text>
      </View>
      <View>
        <Text style={styles.timer}>{formatTime(timer)}</Text>
      </View>
      {!isActive ? (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={handleReset} style={styles.button}>
            <Text style={styles.paragraph}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleStart}  style={styles.button}>
            <Text style={styles.paragraph}>Start</Text>
          </TouchableOpacity>
        </View>
        ) : (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={handleStop} style={styles.button}>
            <Text style={styles.paragraph}>Stop</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    backgroundColor: 'red'
  },
  paragraph: {
    paddingHorizontal: 30,
    paddingVertical: 7,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: '#5A5A5A',
    borderRadius: 20
  },
  timer: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },

});