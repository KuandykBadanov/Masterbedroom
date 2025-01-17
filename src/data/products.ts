import { Product } from '../types';
import { beds } from './beds';
import { sofas } from './sofas';
import { poufs } from './poufs';

export const products: Product[] = [
  ...beds,
  ...sofas,
  ...poufs
];

export const categories = [
  { id: 'beds', name: 'Кровати', count: 30 },
  { id: 'sofas', name: 'Диваны', count: 15 },
  { id: 'poufs', name: 'Пуфики', count: 10 },
];