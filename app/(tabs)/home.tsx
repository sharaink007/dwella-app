import { router } from 'expo-router';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../constants/theme';

const { width } = Dimensions.get('window');

type QuickAction = {
    id: string,
    label: string,
    sub: string,
    color: string,
    route: '/(tabs)/chat' | '/(tabs)/marketplace' | '/(tabs)/connect' | '/(tabs)/profile';

}
type FeedPost = {
    id: string,
    name: string,
    floor: string,
    time: string,
    message: string,
    tag: string,
    tagColor: string,
    tagText: string,
    initials: string,
    avatarBg: string,
    avatarText: string
}

export default function HomeScreen() {
    const QUICK_ACTIONS: QuickAction[] = [
        { id: '1', label: 'Chat', sub: '3 new messages', color: '#FFF0E8', route: '/(tabs)/chat' },
        { id: '2', label: 'Notice board', sub: '2 new posts', color: '#F0F7FF', route: '/(tabs)/marketplace' },
        { id: '3', label: 'Marketplace', sub: '5 new items', color: '#F0FBF5', route: '/(tabs)/marketplace' },
        { id: '4', label: 'Connect', sub: '2 new matches', color: '#FFF0F5', route: '/(tabs)/connect' },
    ];
    const FEED_POSTS: FeedPost[] = [
        {
            id: '1',
            name: 'Sarah R.',
            floor: 'Level 4',
            time: '10 min ago',
            message: 'Anyone lost a set of keys near the mailboxes? Found them this morning!',
            tag: 'Lost & found',
            tagColor: '#FFF0E8',
            tagText: '#993C1D',
            initials: 'SR',
            avatarBg: '#FFF0E8',
            avatarText: '#993C1D',
        },
        {
            id: '2',
            name: 'Marcus J.',
            floor: 'Level 7',
            time: '1 hr ago',
            message: 'Hosting a rooftop BBQ this Saturday at 5pm — all welcome! Bring a plate.',
            tag: 'Event',
            tagColor: '#F0FBF5',
            tagText: '#085041',
            initials: 'MJ',
            avatarBg: '#F0F7FF',
            avatarText: '#0C447C',
        },
        {
            id: '3',
            name: 'Priya K.',
            floor: 'Level 2',
            time: '2 hrs ago',
            message: 'Free couch available — good condition, just moved in with my own furniture. DM me!',
            tag: 'Free stuff',
            tagColor: '#EEEDFE',
            tagText: '#3C3489',
            initials: 'PK',
            avatarBg: '#EEEDFE',
            avatarText: '#3C3489',
        },
    ];
    return (
        <View style={styles.container}>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.headerTop}>
                        <Text style={styles.logo}>
                            Dwella
                        </Text>
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>SK</Text>
                        </View>
                    </View>
                    <View style={styles.buildingPill}>
                        <View style={styles.onlineDot} />
                        <Text style={styles.buildingText}>
                            Southbank Residences - 42 online
                        </Text>

                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionLabel}>
                        Quick Actions
                    </Text>
                    <View style={styles.grid}>

                        {QUICK_ACTIONS.map(action => (
                            <TouchableOpacity
                                key={action.id.toString()}
                                style={[styles.actionCard, { backgroundColor: action.color.toString() }]}
                                onPress={() => router.push(action.route)}
                            >
                                <Text style={styles.actionLabel}>{action.label}</Text>
                                <Text style={styles.actionSub}>{action.sub}</Text>

                            </TouchableOpacity>
                        ))}


                    </View>


                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionLabel}>Community Feed</Text>
                    {FEED_POSTS.map(post => (
                        <View key={post.id} style={styles.feedCard}>
                            <View style={styles.feedHeader}>
                                <View style={[styles.feedAvatar, { backgroundColor: post.avatarBg }]}>
                                    <Text style={[styles.feedAvatarText, { color: post.avatarText }]}>
                                        {post.initials}
                                    </Text>
                                </View>
                                <View style={styles.feedMeta}>
                                    <Text style={styles.feedName}>
                                        {post.name} .{post.floor}
                                    </Text>
                                    <Text style={styles.feedTime}>
                                        {post.time}
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.feedMessage}>
                                {post.message}
                            </Text>
                            <View style={[styles.feedTag, {backgroundColor:post.tagColor}]}>
                                <Text style={styles.feedTagText}>
                                {post.tag}
                                </Text>
                             
                            </View>

                        </View>
                    ))}
                </View>
            </ScrollView>



        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.bg

    },
    header: {
        backgroundColor: COLORS.brand,
        padding: width * 0.06,
        paddingTop: 60,
        paddingBottom: 20,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    logo: {
        fontSize: 26,
        fontWeight: '600',
        color: COLORS.white,
        letterSpacing: -0.5
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#FFD4B8",
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarText: {
        fontWeight: '600',
        fontSize: 13,
        color: COLORS.brandDark
    },
    buildingPill: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 99,
        paddingHorizontal: 12,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'flex-start',
        gap: 8
    },
    onlineDot: {
        backgroundColor: '#A8E6CF',
        width: 7,
        height: 7,
        borderRadius: 99,

    },
    buildingText: {
        fontSize: 12,
        color: COLORS.white
    },
    section: {
        padding: width * 0.06,
        paddingBottom: 0,
    },
    sectionLabel: {
        color: COLORS.textMuted,
        fontSize: 11,
        fontWeight: '600',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        marginBottom: 12
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    actionCard: {
        width: (width - (width * 0.12) - 10) / 2,
        borderRadius: 14,
        padding: 14,
        borderWidth: 0.5,
        borderColor: COLORS.border
    },
    actionLabel: {

        fontSize: 13,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 4


    },
    actionSub: {
        fontSize: 11,
        color: COLORS.textMuted

    },
    feedCard: {
        backgroundColor: COLORS.white,
        borderWidth: 0.5,
        borderColor: COLORS.border,
        borderRadius: 14,
        overflow: 'hidden',
        padding: 14,
        marginBottom: 12
    },
    feedHeader: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 12
    },
    feedAvatar: {

        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',

    },
    feedAvatarText: {

        textAlign: 'center',
        fontSize: 11,
        fontWeight: '600',
    },
    feedMeta:{
        flex: 1 
    },
    feedName:{
        fontSize: 13 ,
        fontWeight: 500
    },
    feedTime:{
        fontSize: 11 ,
        color: COLORS.textMuted
    },
    feedMessage:{
        fontSize: 13,
        lineHeight:20 ,
        marginTop: 8
    },
    feedTag:{
        alignSelf: 'flex-start' ,
        borderRadius: 99,
        paddingHorizontal:8 , 
        paddingVertical: 3,
        marginTop: 10
    },
    feedTagText:{
        fontSize: 10 ,
        fontWeight: 600
    }


})