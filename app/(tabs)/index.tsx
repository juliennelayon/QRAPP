import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppButton from '@/components/AppButton';
import Header from '@/components/Header';
import { COLORS } from '@/constants/colors';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.headerContainer}>
          <Header title="QR Attendance" />
        </View>

        <View style={styles.bodyContainer}>
          <Text style={styles.mainTitle}>School Event Attendance</Text>
          <Text style={styles.subtitle}>
            Scan QR Codes to record attendance during school activities.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <AppButton
            theme="primary"
            title="Scan QR Code"
            icon="qr-code-outline"
            onPress={() => router.push('/scan')}
          />
          <AppButton
            title="Attendance History"
            icon="time-outline"
            onPress={() => router.push('/history')}
          />
          <AppButton
            title="Profile"
            icon="person-outline"
            onPress={() => router.push('/profile')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.background, 
    paddingVertical: 24,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  headerContainer: { 
    alignItems: 'center',
  },
  bodyContainer: { 
    paddingHorizontal: 24, 
    marginBottom: 12, 
    alignItems: 'center', 
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 21,
    textAlign: 'center',
  },
  footerContainer: { 
    paddingHorizontal: 24, 
    width: '100%',
    gap: 1, 
  },
});