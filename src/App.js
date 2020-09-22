import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Routes from './routes'

const App = () => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
