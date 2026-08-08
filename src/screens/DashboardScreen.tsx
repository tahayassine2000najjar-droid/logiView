import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from '../components/Card';
import FilterButton from '../components/FilterButton';
import SearchBar from '../components/SearchBar';
import SectionTitle from '../components/SectionTitle';
import { packages, vehicles } from '../data';
import type { PackageFilter } from '../types';

const STATUS_COLORS: Record<string, string> = {
  'En transit': '#F59E0B',
  'En mission': '#F59E0B',
  'Livré': '#10B981',
  'Disponible': '#10B981',
};

const PACKAGE_FILTERS: PackageFilter[] = ['Tous', 'En transit', 'Livré'];

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const [packageFilter, setPackageFilter] = useState<PackageFilter>('Tous');
  const [query, setQuery] = useState('');
  const [expandedPackageId, setExpandedPackageId] = useState<string | null>(null);
  const [expandedVehicleId, setExpandedVehicleId] = useState<string | null>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const visiblePackages = packages.filter((item) => {
    const matchesFilter = packageFilter === 'Tous' || item.status === packageFilter;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      item.reference.toLowerCase().includes(normalizedQuery) ||
      item.destination.toLowerCase().includes(normalizedQuery);
    return matchesFilter && matchesQuery;
  });

  const visibleVehicles = vehicles.filter((item) => {
    if (normalizedQuery.length === 0) {
      return true;
    }
    return (
      item.plate.toLowerCase().includes(normalizedQuery) ||
      item.type.toLowerCase().includes(normalizedQuery)
    );
  });

  function togglePackage(id: string) {
    setExpandedPackageId((current) => (current === id ? null : id));
  }

  function toggleVehicle(id: string) {
    setExpandedVehicleId((current) => (current === id ? null : id));
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
        <View style={styles.headerText}>
          <Text style={styles.appName}>LogiView</Text>
          <Text style={styles.subtitle}>
            Aperçu en temps réel de vos colis en circulation et de votre flotte
          </Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <SearchBar value={query} onChangeText={setQuery} />

        <SectionTitle title="Colis en cours" />
        <View style={styles.filtersRow}>
          {PACKAGE_FILTERS.map((filter) => (
            <FilterButton
              key={filter}
              label={filter}
              active={packageFilter === filter}
              onPress={() => setPackageFilter(filter)}
            />
          ))}
        </View>

        {visiblePackages.length === 0 ? (
          <Text style={styles.emptyText}>Aucun colis ne correspond à votre recherche.</Text>
        ) : (
          visiblePackages.map((item) => (
            <Card
              key={item.id}
              title={item.reference}
              subtitle={`Destination : ${item.destination}`}
              status={item.status}
              statusColor={STATUS_COLORS[item.status]}
              expanded={expandedPackageId === item.id}
              details={[
                { label: 'Poids', value: item.weight },
                { label: 'Expédié le', value: item.shippedAt },
              ]}
              onPress={() => togglePackage(item.id)}
            />
          ))
        )}

        <SectionTitle title="Véhicules disponibles" />
        {visibleVehicles.length === 0 ? (
          <Text style={styles.emptyText}>Aucun véhicule ne correspond à votre recherche.</Text>
        ) : (
          visibleVehicles.map((item) => (
            <Card
              key={item.id}
              title={item.plate}
              subtitle={item.type}
              status={item.status}
              statusColor={STATUS_COLORS[item.status]}
              expanded={expandedVehicleId === item.id}
              details={[
                { label: 'Chauffeur', value: item.driver },
                { label: 'Kilométrage', value: item.mileage },
              ]}
              onPress={() => toggleVehicle(item.id)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  headerText: {
    flex: 1,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 12,
    marginRight: 12,
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
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  filtersRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    paddingVertical: 16,
  },
});
