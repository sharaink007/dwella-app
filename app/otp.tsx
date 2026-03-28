import { View, Text,  StyleSheet, TextInput, KeyboardAvoidingView, Dimensions, Platform, TouchableOpacity } from "react-native"
import { COLORS } from "@/constants/theme"
import { useState, useRef } from "react"
import { router } from 'expo-router';
const { width, height } = Dimensions.get('window');

export default function OTPScreen() {
    const inputs = useRef<Array<TextInput | null>>([]);
    const [otp, setOtp] = useState(['', '', '', '', '', ''])
    const handleChange = (text: string, index: number) => {

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        if (text && index < 5) {
            inputs.current[index + 1]?.focus()
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    Enter your code
                </Text>
                <Text style={styles.sub}>
                    We sent a 6 digit code to your mobile
                </Text>
                <View style={styles.otpRow}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            maxLength={1}
                            keyboardType="number-pad"
                            style={[styles.otpBox, digit && styles.otpBoxFilled]}
                            value={digit}
                            selectTextOnFocus
                            onChangeText={text => handleChange(text, index)}
                            ref={ref => { inputs.current[index] = ref }}
                        />

                    ))}

                </View>
                <TouchableOpacity
                    style={[styles.primaryBtn,{opacity:otp.every(d=> d!=='')?1:0.4}]}
                    onPress={()=>{
                        if(otp.every(d=>d!='')){
                            router.push('/welcome')
                        }
                    }}
                
                >
                    <Text style={styles.primaryBtnText}>
                        Verify Code
                    </Text>
                </TouchableOpacity>    
                <Text style={styles.resend}>
                    Didn't get a code? {' '}
                    <Text style={{color: COLORS.brand}}>Resend</Text>
                </Text>
            </View>
        </KeyboardAvoidingView>
    )

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
        color: COLORS.text,
        marginBottom: 8,
    },
    sub: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginBottom: 32,
        lineHeight: 20,
    },
    otpRow: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 32,
    },
    otpBox: {
        flex: 1,
        height: 56,
        backgroundColor: COLORS.white,
        borderWidth: 0.5,
        borderColor: COLORS.border,
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        color: COLORS.text,
    },
    otpBoxFilled: {
        borderColor: COLORS.brand,
        borderWidth: 1.5,
    },
    primaryBtn: {
        width: '100%',
        backgroundColor: COLORS.brand,
        borderRadius: 14,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 8,
      },
      primaryBtnText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
      },
      resend: {
        textAlign: 'center',
        fontSize: 13,
        color: COLORS.textMuted,
        marginTop: 20,
      },

})



