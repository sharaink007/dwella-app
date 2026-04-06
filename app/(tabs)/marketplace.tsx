import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { COLORS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';




const { width } = Dimensions.get('window');


type Items = {
  id: string,
  title: string,
  price: string,
  floor: string,
  time: string,
  category: 'free' | 'selling' | 'wanted'
  initials: string,
  avatarBg: string
}
const ITEMS: Items[] = [{
  id: '1',
  title: 'Couch',
  price: 'Free',
  floor: 'Level 4',
  time: '2 hrs ago',
  category: 'free',
  initials: 'Sk',
  avatarBg: '#FFF0E8',

},
{
  id: '2', title: 'Desk Lamp', price: '$20', floor: 'Level 7',
  time: '1 hr ago', category: 'selling', initials: 'MJ', avatarBg: '#F0F7FF'
},
{
  id: '3', title: 'Moving Boxes', price: 'Free', floor: 'Level 2',
  time: '30 min ago', category: 'free', initials: 'PK', avatarBg: '#EEEDFE'
},
]

export default function MarketplaceScreen() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredItems = activeFilter === 'All' ? ITEMS : ITEMS.filter(item => item.category === activeFilter.toLowerCase())
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Marketplace
        </Text>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name='add' size={22} color={COLORS.white}  >
          </Ionicons>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ gap: 8, paddingHorizontal: width * 0.06 }}
        showsHorizontalScrollIndicator={false}
        style={styles.filterRow}
      >
        {
          ['All', 'Free', 'Selling', 'Wanted'].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterTab,
                activeFilter === filter && styles.filterTabActive
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text style={[
                styles.filterText,
                activeFilter === filter && styles.filterTextActive
              ]}>
                {filter}
              </Text>

            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemCard}>
            <View style={[styles.itemImage, { backgroundColor: item.avatarBg }]}>
              <Text style={styles.itemInitials}>
                {item.initials}
              </Text>
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text style={styles.itemMeta}>{item.floor} · {item.time} </Text>
            </View>
          </TouchableOpacity>
        )}

      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.bg
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: width * 0.06,
    paddingTop: 60,
    backgroundColor: COLORS.white
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.text

  },
  addBtn: {

    backgroundColor: COLORS.brand,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'

  },
  filterRow: {
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.border,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 99,
    borderWidth: 0.5,
    backgroundColor: COLORS.white,
    borderColor: COLORS.border

  },
  filterTabActive: {
    backgroundColor: COLORS.brand,
    borderColor: COLORS.border
  },
  filterText: {
    fontSize: 13,
    color: COLORS.textMuted
  },
  filterTextActive: {
    color: COLORS.white
  },
  grid: {
    gap: 12,
    padding: width * 0.06
  },
  itemCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: COLORS.border
  },
  itemImage: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemInitials: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.textMuted
  },
  itemInfo: {
    padding: 10
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.text
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.brand,
    marginTop: 2
  },
  itemMeta: {
    fontSize: 11,
    color: COLORS.textMuted,
    marginTop: 4
  }



})