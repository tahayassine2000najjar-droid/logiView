export type PackageStatus = 'En transit' | 'Livré';

export type VehicleStatus = 'Disponible' | 'En mission';

export interface PackageItem {
  id: string;
  reference: string;
  destination: string;
  status: PackageStatus;
}

export interface VehicleItem {
  id: string;
  plate: string;
  type: string;
  status: VehicleStatus;
}

export const packages: PackageItem[] = [
  { id: 'pkg-1', reference: 'LV-2026-0451', destination: 'Lyon', status: 'En transit' },
  { id: 'pkg-2', reference: 'LV-2026-0452', destination: 'Paris', status: 'En transit' },
  { id: 'pkg-3', reference: 'LV-2026-0453', destination: 'Marseille', status: 'Livré' },
  { id: 'pkg-4', reference: 'LV-2026-0454', destination: 'Bordeaux', status: 'En transit' },
  { id: 'pkg-5', reference: 'LV-2026-0455', destination: 'Nantes', status: 'Livré' },
];

export const vehicles: VehicleItem[] = [
  { id: 'veh-1', plate: 'AD-345-BC', type: 'Camion 20T', status: 'Disponible' },
  { id: 'veh-2', plate: 'EF-678-DE', type: 'Camion frigorifique', status: 'En mission' },
  { id: 'veh-3', plate: 'GH-901-FG', type: 'Fourgonnette', status: 'Disponible' },
  { id: 'veh-4', plate: 'IJ-234-HI', type: 'Semi-remorque', status: 'En mission' },
  { id: 'veh-5', plate: 'KL-567-JK', type: 'Camion 12T', status: 'Disponible' },
];
