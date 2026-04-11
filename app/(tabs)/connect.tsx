
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/theme';


const { width } = Dimensions.get('window');


type Neighbours = {
  id: string,
  name: string,
  floor: string,
  duration: string,
  fact: string,
  initials: string,
  avatarBg: string,
  verified: boolean


}

const NEIGHBOURS: Neighbours[] = [{

  id: '1', name: 'Marcus J.', floor: 'Level 7', duration: '2 months',
  fact: 'Coffee lover, remote worker, has a dog',
  initials: 'MJ', avatarBg: '#F0F7FF', verified: true
},

{
  id: '2', name: 'Priya K.', floor: 'Level 3', duration: '8 months',
  fact: 'Yoga instructor, loves cooking Thai food',
  initials: 'PK', avatarBg: '#EEEDFE', verified: true
},

{
  id: '3', name: 'James T.', floor: 'Level 5', duration: '1 month',
  fact: 'New to Melbourne, looking to explore the city',
  initials: 'JT', avatarBg: '#F0FBF5', verified: false
},

{
  id: '4', name: 'Sarah R.', floor: 'Level 4', duration: '6 months',
  fact: 'Graphic designer, has the best plant collection',
  initials: 'SR', avatarBg: '#FFF0E8', verified: true
},
]


export default function ConnectScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSkip = () => {
   
      setCurrentIndex(currentIndex + 1)
    
  }
  const handleConnect = () => {
    Alert.alert(
      'Connection Sent!',
      `We'll notify ${NEIGHBOURS[currentIndex].name} annoymously. You'll be connected if they accept.`,
      [{ text: 'Nice!', onPress: handleSkip }]
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> Connect</Text>
        <Text style={styles.headerSub}> Meet your neighbours</Text>
      </View>

      {currentIndex >= NEIGHBOURS.length ? (
        <View style={styles.emptyContainer} >
          <Text style={styles.emptyTitle}> You're all caughtup </Text>
          <Text style={styles.emptySub}>
            You've seen all your neighbours for now.{'\n'}
            Check back later for new residents.
          </Text>
          <TouchableOpacity style={styles.resetBtn} onPress={() => setCurrentIndex(0)}>
            <Text style={styles.resetBtnText}> Start Over </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={[styles.avatarLarge, { backgroundColor: NEIGHBOURS[currentIndex].avatarBg }]}>
              <Text style={styles.avatarText}>
                {NEIGHBOURS[currentIndex].initials}
              </Text>
            </View>
            <Text style={styles.neighbourName}>
              {NEIGHBOURS[currentIndex].name}
            </Text>
            <Text style={styles.neighbourFloor}>
              {NEIGHBOURS[currentIndex].floor} · {NEIGHBOURS[currentIndex].duration}
            </Text>
            <View style={styles.factBox}>
              <Text style={styles.factText}>"{NEIGHBOURS[currentIndex].fact}"</Text>
            </View>
            {NEIGHBOURS[currentIndex].verified && (
              <View style={styles.verifiedBadge}>
                <Ionicons name='checkmark-circle' size={14} color={COLORS.teal}></Ionicons>
                <Text style={styles.verifiedText}>
                  Verified Resident
                </Text>
              </View>
            )}
          </View>
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.skipBtn} onPress={handleSkip} >
              <Ionicons name='close' size={28} color={COLORS.textMuted}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.connectBtn} onPress={handleConnect}>
              <Ionicons name='checkmark' size={28} color={COLORS.white}>

              </Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      )}

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg
  },
  header: {
    padding: width * 0.06,
    paddingTop: 60,
    backgroundColor: COLORS.white
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.text
  },
  headerSub: {
    fontSize: 13,
    color: COLORS.textMuted,
    marginTop: 4
  },
  cardContainer: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.06
  },
  card: {
    backgroundColor: COLORS.white,
    padding: 24,
    borderRadius: 24,
    width: '100%',
    borderColor: COLORS.border,
    alignItems: 'center',
    borderWidth: 0.5
  },
  avatarLarge: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.textMuted
  },
  neighbourName: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.text
  },
  neighbourFloor: {
    fontSize: 13,
    marginTop: 4,
    color: COLORS.textMuted
  },
  factBox: {
    backgroundColor: COLORS.bg,
    borderRadius: 12,
    padding: 14,
    marginTop: 16,
    width: '100%'
  },
  factText: {
    fontSize: 14,
    color: COLORS.textMuted,
    lineHeight: 20,
    textAlign: 'center'
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 14

  },
  verifiedText: {
    fontSize: 12,
    color: COLORS.teal,
    fontWeight: '500'
  },
  actionRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20
  },
  skipBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center'
  },
  connectBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.brand,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyContainer:{
    flex:1 ,
    alignItems: 'center',
    justifyContent: 'center',
    padding: width *0.1
  },
  emptyTitle:{
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.text ,
    textAlign: 'center',
    marginBottom: 8
  },
  emptySub:{
    fontSize: 14,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24
  },
  resetBtn:{
    backgroundColor: COLORS.brand ,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 32,
   
  },
  resetBtnText:{
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '600'
  }

})