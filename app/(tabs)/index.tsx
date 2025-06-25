import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.profileButton}>
            <SymbolView 
              name="person.circle.fill" 
              size={32} 
              tintColor={Colors.light.snapPrimary}
            />
          </TouchableOpacity>
        </View>
        
        <ThemedText type="title" style={styles.headerTitle}>
          SnapConnect
        </ThemedText>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <IconSymbol name="magnifyingglass" size={24} color={Colors.light.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <SymbolView name="plus" size={24} tintColor={Colors.light.text} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Stories Section */}
      <View style={styles.storiesSection}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Stories
        </ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesScroll}>
          <TouchableOpacity style={styles.storyItem}>
            <View style={styles.addStoryCircle}>
              <SymbolView name="plus" size={20} tintColor="#fff" />
            </View>
            <ThemedText style={styles.storyText}>Add Story</ThemedText>
          </TouchableOpacity>
          
          {/* Sample friends' stories */}
          {['Friend 1', 'Friend 2', 'Friend 3', 'Friend 4'].map((friend, index) => (
            <TouchableOpacity key={index} style={styles.storyItem}>
              <View style={styles.storyCircle}>
                <SymbolView name="person.fill" size={24} tintColor={Colors.light.snapPrimary} />
              </View>
              <ThemedText style={styles.storyText}>{friend}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Chat/Friends List */}
      <ThemedView style={styles.chatSection}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Chats
        </ThemedText>
        
        <ScrollView style={styles.chatList}>
          {/* Sample chat items */}
          {[
            { name: 'Best Friend', message: 'Hey! How are you?', time: '2m' },
            { name: 'College Group', message: 'Anyone up for lunch?', time: '1h' },
            { name: 'Family', message: 'See you tonight!', time: '3h' },
            { name: 'Work Team', message: 'Meeting at 3pm', time: '5h' },
          ].map((chat, index) => (
            <TouchableOpacity key={index} style={styles.chatItem}>
              <View style={styles.chatAvatar}>
                <SymbolView name="person.fill" size={20} tintColor={Colors.light.snapPrimary} />
              </View>
              <View style={styles.chatContent}>
                <ThemedText style={styles.chatName}>{chat.name}</ThemedText>
                <ThemedText style={styles.chatMessage}>{chat.message}</ThemedText>
              </View>
              <ThemedText style={styles.chatTime}>{chat.time}</ThemedText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ThemedView>

      {/* Camera Button */}
      <TouchableOpacity 
        style={styles.cameraButton}
        onPress={() => router.push('/camera' as any)}
      >
        <SymbolView 
          name="camera.fill" 
          size={28} 
          tintColor="#fff"
        />
      </TouchableOpacity>
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
  headerLeft: {
    flex: 1,
  },
  headerTitle: {
    flex: 2,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  headerButton: {
    padding: 8,
  },
  profileButton: {
    padding: 4,
  },
  storiesSection: {
    paddingVertical: 16,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '600',
  },
  storiesScroll: {
    paddingHorizontal: 12,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  addStoryCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light.snapPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    borderWidth: 2,
    borderColor: Colors.light.snapPrimary,
  },
  storyText: {
    fontSize: 12,
    textAlign: 'center',
  },
  chatSection: {
    flex: 1,
    paddingTop: 16,
  },
  chatList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  chatAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  chatContent: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  cameraButton: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light.snapPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
