import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface FilterButtonProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

export default function FilterButton({ label, active, onPress }: FilterButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, active && styles.buttonActive]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
  },
  buttonActive: {
    backgroundColor: '#111827',
    borderColor: '#111827',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },
  labelActive: {
    color: '#FFFFFF',
  },
});
