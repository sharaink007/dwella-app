import { router } from 'expo-router';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const { width } = Dimensions.get('window');

type Building = {
    id: String,
    name: String,
    address: String,
    units: number
}

const BUILDINGS: Building[] = [
    {
        id: '1',
        name: 'Southbank Residences 1 ',
        address: '42 sthbank',
        units: 68
    },
    {
        id: '2',
        name: 'Flagstaff 1 ',
        address: '42 sthbank',
        units: 68
    },
    {
        id: '3',
        name: 'Casa Green 1 ',
        address: '42 sthbank',
        units: 68
    }
]

export default function FindBuildingScreen() {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState<Building | null>(null);
    const filtered = BUILDINGS.filter(b =>
        b.name.toLowerCase().includes(query.toLowerCase())
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Find your building
            </Text>
            <Text style={styles.sub}>
                Search for your building to connect with your neighbours
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Building name or address'
                placeholderTextColor="#C4B0A4"
                value={query}
                onChangeText={setQuery}

            />
            <View style={styles.resultsCard}>
                {filtered.map((b, i) => (
                    <TouchableOpacity
                        key={b.id.toString()}
                        onPress={() => setSelected(b)}
                        style={[
                            styles.buildingRow,
                            selected?.id === b.id && styles.buildingRowSelected,
                            i < filtered.length - 1 && styles.buildingRowBorder,
                        ]}
                    >
                        <View>
                            <Text style={styles.buildingName}>{b.name}</Text>
                            <Text style={styles.buildingAddress}>{b.address} · {b.units} units</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                style={[styles.primaryBtn, { opacity: selected ? 1 : 0.4 }]}
                onPress={() => {
                    if (selected) {
                        router.push('/verify');
                    }
                }}
            >
                <Text style={styles.primaryBtnText}>This is my building</Text>
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
    buildingRow: {
        padding: 14,
    },
    buildingRowSelected: {
        backgroundColor: '#FFF0E8',
    },
    buildingRowBorder: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#F0E4DC',
    },
    buildingName: {
        fontSize: 14,
        fontWeight: '500',
        color: '#3D2C20',
        marginBottom: 2,
    },
    buildingAddress: {
        fontSize: 12,
        color: '#A08070',
    },
    resultsCard: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#E8DDD6',
        borderRadius: 14,
        overflow: 'hidden',
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


})