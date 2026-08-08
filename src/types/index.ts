export type PackageStatus = 'En transit' | 'Livré';

export type VehicleStatus = 'Disponible' | 'En mission';

export type PackageFilter = 'Tous' | PackageStatus;

export interface PackageItem {
  id: string;
  reference: string;
  destination: string;
  status: PackageStatus;
  weight: string;
  shippedAt: string;
}

export interface VehicleItem {
  id: string;
  plate: string;
  type: string;
  status: VehicleStatus;
  driver: string;
  mileage: string;
}
