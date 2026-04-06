import { Alert, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/theme';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

type IoniconsName = keyof typeof Ionicons.glyphMap;

type Settings = {

  id: string,
  icon: IoniconsName,
  label: string

}
const SETTINGS: Settings[] = [
  { id: '1', icon: 'person-outline', label: 'Edit profile' },
  { id: '2', icon: 'notifications-outline', label: 'Notifications' },
  { id: '3', icon: 'lock-closed-outline', label: 'Privacy' },
  { id: '4', icon: 'chatbubble-outline', label: 'My posts' },
];

export default function HomeScreen() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarLarge}>
          <Text style={styles.avatarLargeText}> SK </Text>
        </View>
        <Text style={styles.profileName}>
          Sharain K
        </Text>
        <Text style={styles.profileFloor}>
          Level 3 - Southbank Residences
        </Text>
        <View style={styles.verifiedBadge}>
          <Text style={styles.verifiedText}>
            Verification Pending
          </Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            14
          </Text>
          <Text style={styles.statLabel}>
            Days
          </Text>
        </View>
        <View style={styles.statsDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            8
          </Text>
          <Text style={styles.statLabel}>
            Posts
          </Text>
        </View>
        <View style={styles.statsDivider} />


        <View style={styles.statItem}>
          <Text style={styles.statNumber}>
            23
          </Text>
          <Text style={styles.statLabel}>
            Neighbours
          </Text>
        </View>
      </View>

      <View style= {styles.settingsCard}>
        {SETTINGS.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style ={[
              styles.settingsRow,
              index < SETTINGS.length - 1 && styles.settingsRowBorder
            ]}
          >
          <Ionicons name={item.icon} size = {20} color={COLORS.textMuted} />
          <Text style={styles.settingsLabel}>
            {item.label}
          </Text>
          <Ionicons name="chevron-forward" size={16} color={COLORS.textMuted}>

          </Ionicons>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.signOutBtn} onPress={()=>{
        Alert.alert(
          'Sign Out' ,
          'Are you sure you want to sign out?' ,
          [
            {
              text: 'Cancel',
              style: 'cancel'
            },
            {
              text: 'Sign out' ,
              style: 'destructive',
              onPress:() => 
                router.push('/')
              
            }
          ]
        )
      }}>
        <Text style={styles.signOutText}>
          Sign out 
        </Text>
      </TouchableOpacity>


    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.bg

  },
  header: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingTop: 60,
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.brandLight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarLargeText: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.brandDark,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 12
  },
  profileFloor: {
    fontSize: 13,
    color: COLORS.textMuted,
    marginTop: 4
  },
  verifiedBadge: {
    backgroundColor: '#FFF0E8',
    borderRadius: 99,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 10
  },
  verifiedText: {
    fontSize: 12,
    color: COLORS.brandDark,
    fontWeight: '500',

  },
  statsRow: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    padding: 20,
    marginTop: 12,
    borderRadius: 14,
    marginHorizontal: width * 0.06
  },
  statItem: {
    flex: 1,
    alignItems: 'center'
  },
  statNumber: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.text
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textMuted,
    marginTop: 4
  },
  statsDivider: {
    width: 0.5,
    backgroundColor: COLORS.border
  },
  settingsRow:{
  
    flexDirection: 'row' ,
    alignItems: 'center' ,
    padding: 16 ,
    gap: 12
  },
  settingsCard:{
    backgroundColor: COLORS.white,
    borderRadius: 14,
    marginTop: 12,
    marginHorizontal: width*0.06 ,
    overflow: 'hidden'
  },
  settingsRowBorder:{
    borderBottomWidth: 0.5 ,
    borderBottomColor: COLORS.border
  },
  settingsLabel:{
     
    flex: 1, 
    fontSize: 14 ,
    color: COLORS.text
  },
  signOutBtn:{
    marginHorizontal: width * 0.06 ,
    marginTop: 24 ,
    borderRadius: 14 ,
    paddingVertical: 15 ,
    alignItems: 'center',
    borderWidth: 0.5 ,
    borderColor: COLORS.border,
  },
  signOutText:{
    color: COLORS.brand , 
    fontWeight: '500' ,
    fontSize: 16
  }




})
