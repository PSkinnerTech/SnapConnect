import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { SymbolView } from 'expo-symbols';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function DiscoverScreen() {
  const discoverItems = [
    { id: 1, title: 'Daily News', subtitle: 'Top stories today', category: 'News', color: '#FF4757' },
    { id: 2, title: 'Food Stories', subtitle: 'Recipe videos', category: 'Food', color: '#2ED573' },
    { id: 3, title: 'Travel Vibes', subtitle: 'Amazing places', category: 'Travel', color: '#3742FA' },
    { id: 4, title: 'Tech Updates', subtitle: 'Latest in tech', category: 'Tech', color: '#FF6B35' },
    { id: 5, title: 'Music Hits', subtitle: 'Trending songs', category: 'Music', color: '#A55EEA' },
    { id: 6, title: 'Sports Today', subtitle: 'Game highlights', category: 'Sports', color: '#26C6DA' },
    { id: 7, title: 'Fashion Week', subtitle: 'Style trends', category: 'Fashion', color: '#FF5722' },
    { id: 8, title: 'Gaming Zone', subtitle: 'Game reviews', category: 'Gaming', color: '#4CAF50' },
  ];

  const trendingTopics = ['#TechNews', '#FoodieLife', '#Travel2024', '#MusicVibes', '#GameOn'];

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText type="title" style={styles.headerTitle}>
          Discover
        </ThemedText>
        <TouchableOpacity style={styles.searchButton}>
          <IconSymbol name="magnifyingglass" size={24} color={Colors.light.text} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Trending Section */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            🔥 Trending
          </ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingScroll}>
            {trendingTopics.map((topic, index) => (
              <TouchableOpacity key={index} style={styles.trendingTag}>
                <ThemedText style={styles.trendingText}>{topic}</ThemedText>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* For You Section */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            For You
          </ThemedText>
          <View style={styles.discoverGrid}>
            {discoverItems.map((item, index) => (
              <TouchableOpacity 
                key={item.id} 
                style={[
                  styles.discoverItem, 
                  index % 2 === 0 ? styles.leftItem : styles.rightItem,
                  { backgroundColor: item.color }
                ]}
              >
                <View style={styles.discoverOverlay}>
                  <View style={styles.discoverContent}>
                    <ThemedText style={styles.discoverCategory}>
                      {item.category}
                    </ThemedText>
                    <ThemedText style={styles.discoverTitle}>
                      {item.title}
                    </ThemedText>
                    <ThemedText style={styles.discoverSubtitle}>
                      {item.subtitle}
                    </ThemedText>
                  </View>
                  <View style={styles.discoverIcon}>
                    <SymbolView 
                      name="play.fill" 
                      size={16} 
                      tintColor="#fff"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Publisher Stories */}
        <View style={styles.section}>
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Publisher Stories
          </ThemedText>
          <View style={styles.publisherList}>
            {[
              { name: 'CNN', stories: '12 stories', verified: true },
              { name: 'BuzzFeed', stories: '8 stories', verified: true },
              { name: 'ESPN', stories: '15 stories', verified: true },
              { name: 'TechCrunch', stories: '6 stories', verified: true },
            ].map((publisher, index) => (
              <TouchableOpacity key={index} style={styles.publisherItem}>
                <View style={styles.publisherAvatar}>
                  <SymbolView name="newspaper.fill" size={20} tintColor={Colors.light.snapPrimary} />
                </View>
                <View style={styles.publisherInfo}>
                  <View style={styles.publisherNameRow}>
                    <ThemedText style={styles.publisherName}>{publisher.name}</ThemedText>
                    {publisher.verified && (
                      <SymbolView name="checkmark.seal.fill" size={16} tintColor="#1DA1F2" />
                    )}
                  </View>
                  <ThemedText style={styles.publisherStories}>{publisher.stories}</ThemedText>
                </View>
                <IconSymbol name="chevron.right" size={16} color="#999" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchButton: {
    padding: 8,
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '600',
  },
  trendingScroll: {
    paddingHorizontal: 12,
  },
  trendingTag: {
    backgroundColor: Colors.light.snapPrimary,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  trendingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  discoverGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 8,
  },
  discoverItem: {
    width: '48%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  leftItem: {
    marginRight: '2%',
    marginLeft: '2%',
  },
  rightItem: {
    marginLeft: '2%',
    marginRight: '2%',
  },
  discoverOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 12,
    justifyContent: 'space-between',
  },
  discoverContent: {
    flex: 1,
  },
  discoverCategory: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  discoverTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  discoverSubtitle: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.9,
  },
  discoverIcon: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
    padding: 6,
  },
  publisherList: {
    paddingHorizontal: 16,
  },
  publisherItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  publisherAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  publisherInfo: {
    flex: 1,
  },
  publisherNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  publisherName: {
    fontSize: 16,
    fontWeight: '600',
  },
  publisherStories: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
