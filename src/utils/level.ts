import type { Level } from '../types';

export const levelLabels: Record<Level, string> = {
  foundation: 'Nền tảng',
  intermediate: 'Trung cấp',
  advanced: 'Nâng cao',
  expert: 'Chuyên gia',
};

export const levelWordTargets: Record<Level, number> = {
  foundation: 800,
  intermediate: 1000,
  advanced: 900,
  expert: 500,
};
