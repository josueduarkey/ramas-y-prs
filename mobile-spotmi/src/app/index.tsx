import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

const categories = ['Café', 'Comida', 'Música', 'Aire libre'];

const nearbySpots = [
  { name: 'Casa Brava', detail: 'Café de especialidad · 0.4 km', color: '#F5A45B' },
  { name: 'Patio Central', detail: 'Música en vivo · 0.8 km', color: '#75BFA4' },
];

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View>
              <ThemedText type="small" themeColor="textSecondary">
                MIÉRCOLES, 16 DE SEPTIEMBRE
              </ThemedText>
              <ThemedText type="subtitle">Hola, Rodrigo</ThemedText>
            </View>
            <View style={styles.avatar}>
              <ThemedText style={styles.avatarText}>R</ThemedText>
            </View>
          </View>

          <ThemedText style={styles.intro} themeColor="textSecondary">
            Encuentra tu próximo lugar favorito.
          </ThemedText>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
            {categories.map((category, index) => (
              <Pressable key={category} style={[styles.category, index === 0 && styles.categoryActive]}>
                <ThemedText style={index === 0 ? styles.categoryActiveText : undefined}>
                  {category}
                </ThemedText>
              </Pressable>
            ))}
          </ScrollView>

          <ThemedView type="backgroundElement" style={styles.featuredCard}>
            <View style={styles.featuredCopy}>
              <ThemedText type="small" themeColor="textSecondary">RECOMENDADO PARA TI</ThemedText>
              <ThemedText type="subtitle" style={styles.featuredTitle}>La Esquina Verde</ThemedText>
              <ThemedText themeColor="textSecondary">Brunch, plantas y buena música</ThemedText>
              <Pressable style={styles.primaryButton}>
                <ThemedText style={styles.primaryButtonText}>Ver lugar</ThemedText>
              </Pressable>
            </View>
            <View style={styles.featuredArt}>
              <ThemedText style={styles.artText}>☼</ThemedText>
            </View>
          </ThemedView>

          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>Cerca de ti</ThemedText>
            <ThemedText type="linkPrimary">Ver todo</ThemedText>
          </View>

          <View style={styles.spotList}>
            {nearbySpots.map((spot) => (
              <Pressable key={spot.name} style={styles.spotRow}>
                <View style={[styles.spotImage, { backgroundColor: spot.color }]}>
                  <ThemedText style={styles.spotImageText}>{spot.name.charAt(0)}</ThemedText>
                </View>
                <View style={styles.spotInfo}>
                  <ThemedText type="smallBold">{spot.name}</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">{spot.detail}</ThemedText>
                </View>
                <ThemedText style={styles.arrow}>›</ThemedText>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  content: {
    gap: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.four,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1C6E63',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  intro: {
    marginTop: -Spacing.two,
  },
  categories: {
    gap: Spacing.two,
    paddingVertical: Spacing.one,
  },
  category: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.five,
    backgroundColor: '#F0F0F3',
  },
  categoryActive: {
    backgroundColor: '#1C6E63',
  },
  categoryActiveText: {
    color: '#FFFFFF',
  },
  featuredCard: {
    minHeight: 210,
    borderRadius: Spacing.three,
    padding: Spacing.three,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  featuredCopy: {
    flex: 1,
    gap: Spacing.two,
    zIndex: 1,
  },
  featuredTitle: {
    fontSize: 28,
    lineHeight: 32,
  },
  primaryButton: {
    backgroundColor: '#E46F4C',
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Spacing.two,
    marginTop: Spacing.one,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  featuredArt: {
    width: 106,
    height: 150,
    borderRadius: 54,
    backgroundColor: '#F6C85F',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '12deg' }],
    marginRight: -Spacing.four,
    marginTop: Spacing.three,
  },
  artText: {
    color: '#1C6E63',
    fontSize: 54,
    transform: [{ rotate: '-12deg' }],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.two,
  },
  sectionTitle: {
    fontSize: 24,
    lineHeight: 30,
  },
  spotList: {
    gap: Spacing.two,
  },
  spotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.one,
  },
  spotImage: {
    width: 56,
    height: 56,
    borderRadius: Spacing.two,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spotImageText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  spotInfo: {
    flex: 1,
    gap: Spacing.one,
  },
  arrow: {
    fontSize: 28,
    color: '#60646C',
  },
});
