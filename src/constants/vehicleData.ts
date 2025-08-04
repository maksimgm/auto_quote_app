export const makes = [
  'Toyota',
  'Honda',
  'Ford',
  'Chevrolet',
  'BMW',
  'Mercedes-Benz',
] as const;

export const models: { [key in typeof makes[number]]?: readonly string[] } = {
  Toyota: ['Camry', 'Corolla', 'RAV4', 'Prius', 'Highlander'] as const,
  Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit'] as const,
  Ford: ['F-150', 'Mustang', 'Escape', 'Explorer', 'Focus'] as const,
  Chevrolet: ['Silverado', 'Equinox', 'Malibu', 'Traverse', 'Camaro'] as const,
  BMW: ['3 Series', '5 Series', 'X5', 'X3', '7 Series'] as const,
  'Mercedes-Benz': ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE'] as const,
} as const;