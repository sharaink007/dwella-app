import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
import { COLORS } from '../constants/theme'



export default function Welcome() {
  const [name, setName] = useState('');
  const [floor, setFloor] = useState('')
  const [fact, setFact] = useState('')
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome home! 🎉
        </Text>
        <Text style={styles.sub}>
          You've joined Southbank Residences.{'\n'}
          <Text style={{ color: '#FF7B54', fontWeight: '500' }}>
            12 neighbours
          </Text> are already on Dwella.
        </Text>
        <View style={styles.greenStatus}>

          <Text style={{ color: '#085041', fontSize: 13, fontWeight: '500' }}>
            Verification code sent to your mobile
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder='First Name'
          placeholderTextColor="#C4B0A4"
          value={name}
          onChangeText={setName}

        />
        <TextInput
          style={styles.input}
          placeholder='Floor'
          placeholderTextColor="#C4B0A4"
          value={floor}
          onChangeText={setFloor}

        />
        <TextInput
          style={styles.input}
          placeholder='A fun fact about yourself'
          placeholderTextColor="#C4B0A4"
          value={fact}
          onChangeText={setFact}

        />


        <TouchableOpacity
          style={[styles.primaryBtn, { opacity: name ? 1 : 0.4 }]}
          onPress={() => {
            if (name) {
              router.push('/home');
            }
          }}
        >
          <Text style={styles.primaryBtnText}>Let's go</Text>
        </TouchableOpacity>


      </View>

    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    padding: width * 0.06,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#3D2C20',
    marginBottom: 8,
  },
  sub: {
    fontSize: 14,
    color: '#A08070',
    marginBottom: 24,
    lineHeight: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FF7B54',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#3D2C20',
    marginBottom: 12,
  },
  primaryBtn: {
    width: '100%',
    backgroundColor: '#FF7B54',
    borderRadius: 14,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  primaryBtnText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  greenStatus: {
    backgroundColor: '#F0FBF5',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row'
  }

})