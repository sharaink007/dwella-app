import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const { width } = Dimensions.get('window');




export default function Verify() {
    const [phone, setPhone] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Verify your address
            </Text>
            <Text style={styles.sub}>
                We'll send a code to your mobile
            </Text>

            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={styles.countryCode}>
                    <Text style={{ color: '#3D2C20', fontSize: 15 }}>🇦🇺 +61</Text>
                </View>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="04XX XXX XXX"
                    placeholderTextColor="#C4B0A4"
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />
            </View>

            <TouchableOpacity
                style={[styles.primaryBtn, { opacity: phone ? 1 : 0.4 }]}

                onPress={() => {
                    if (phone) {
                        router.push('/otp');
                    }


                }}
            >
                <Text style={styles.primaryBtnText}>Send Code</Text>
            </TouchableOpacity>


        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8F4',
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
    countryCode: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#E8DDD6',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        justifyContent: 'center',
    }


})