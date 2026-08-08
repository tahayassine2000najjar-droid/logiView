import type { PackageItem, VehicleItem } from './types';

export const packages: PackageItem[] = [
  { id: 'pkg-1', reference: 'LV-2026-0451', destination: 'Lyon', status: 'En transit', weight: '120 kg', shippedAt: '10/08/2026' },
  { id: 'pkg-2', reference: 'LV-2026-0452', destination: 'Paris', status: 'En transit', weight: '45 kg', shippedAt: '11/08/2026' },
  { id: 'pkg-3', reference: 'LV-2026-0453', destination: 'Marseille', status: 'Livré', weight: '78 kg', shippedAt: '08/08/2026' },
  { id: 'pkg-4', reference: 'LV-2026-0454', destination: 'Bordeaux', status: 'En transit', weight: '210 kg', shippedAt: '11/08/2026' },
  { id: 'pkg-5', reference: 'LV-2026-0455', destination: 'Nantes', status: 'Livré', weight: '33 kg', shippedAt: '09/08/2026' },
];

export const vehicles: VehicleItem[] = [
  { id: 'veh-1', plate: 'AD-345-BC', type: 'Camion 20T', status: 'Disponible', driver: 'Karim Benali', mileage: '84 200 km' },
  { id: 'veh-2', plate: 'EF-678-DE', type: 'Camion frigorifique', status: 'En mission', driver: 'Sofia Meziane', mileage: '132 540 km' },
  { id: 'veh-3', plate: 'GH-901-FG', type: 'Fourgonnette', status: 'Disponible', driver: 'Julien Costa', mileage: '45 780 km' },
  { id: 'veh-4', plate: 'IJ-234-HI', type: 'Semi-remorque', status: 'En mission', driver: 'Ahmed Rahmani', mileage: '210 900 km' },
  { id: 'veh-5', plate: 'KL-567-JK', type: 'Camion 12T', status: 'Disponible', driver: 'Laura Petit', mileage: '67 310 km' },
];
