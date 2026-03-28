
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView,
  Platform, Dimensions
} from 'react-native'

import { useState } from 'react';

import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.logo}>
          Dwella
        </Text>
        <Text style={styles.tagline}>Meet the neighbours next door</Text>

        <TextInput
          placeholder='abc@123.com'
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#C4B0A4"
          style={styles.input}
        />
        <TextInput
          placeholder='Create a password'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          style={[styles.input, { marginTop: 12 }]}
        />
        <TouchableOpacity style={styles.button} onPress={() => {
          router.push('/find-building')
        }}>
          <Text style={styles.buttonText}> Create account </Text>
        </TouchableOpacity>
        <Text style={styles.alreadySignedIn}>
          Already have an account?{' '}
          <Text style={{ color: '#FF7B54' }}>Sign in</Text>
        </Text>


      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.06,

  },
  logo: {
    fontSize: 36,
    fontWeight: '600',
    letterSpacing: -0.5,
    color: '#FF7B54',
  },
  tagline: {
    fontSize: 14,
    color: '#A08070',
    marginTop: 8,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    borderColor: '#E8DDD6',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#3D2C20',
  },

  button: {
    width: '100%',
    backgroundColor: '#FF7B54',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  alreadySignedIn: {
    color: '#A08070',
    fontSize: 12

  }

})