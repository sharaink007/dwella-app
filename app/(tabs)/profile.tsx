import { View, Text } from 'react-native';
import { COLORS } from '../../constants/theme';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.bg, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: COLORS.text, fontSize: 22, fontWeight: '600' }}>Profile</Text>
    </View>
  );
}