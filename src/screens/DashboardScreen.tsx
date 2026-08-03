import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from '../components/Card';
import { packages as initialPackages, vehicles as initialVehicles } from '../data';

const STATUS_COLORS: Record<string, string> = {
  'En transit': '#F59E0B',
  'Livré': '#10B981',
  'Disponible': '#10B981',
  'En mission': '#3B82F6',
};

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const [packages, setPackages] = useState(initialPackages);
  const [vehicles, setVehicles] = useState(initialVehicles);

  function togglePackageStatus(id: string) {
    setPackages((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'En transit' ? 'Livré' : 'En transit' }
          : item
      )
    );
  }

  function toggleVehicleStatus(id: string) {
    setVehicles((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status: item.status === 'Disponible' ? 'En mission' : 'Disponible' }
          : item
      )
    );
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image source={require('../../assets/icon.png')} style={styles.logo} />
          <View style={styles.headerText}>
            <Text style={styles.appName}>LogiView</Text>
            <Text style={styles.subtitle}>
              Aperçu en temps réel de vos colis en circulation et de votre flotte
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Colis en cours</Text>
        {packages.map((item) => (
          <Card
            key={item.id}
            title={item.reference}
            subtitle={`Destination : ${item.destination}`}
            status={item.status}
            statusColor={STATUS_COLORS[item.status]}
            onPress={() => togglePackageStatus(item.id)}
          />
        ))}

        <Text style={styles.sectionTitle}>Véhicules disponibles</Text>
        {vehicles.map((item) => (
          <Card
            key={item.id}
            title={item.plate}
            subtitle={item.type}
            status={item.status}
            statusColor={STATUS_COLORS[item.status]}
            onPress={() => toggleVehicleStatus(item.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 12,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
    marginTop: 8,
  },
});
