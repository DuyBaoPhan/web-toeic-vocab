import { useQuery } from '@tanstack/react-query'; import { api } from '../lib/api';
export function useFlashcard(){ return useQuery({queryKey:['dueCards'], queryFn: api.getDueCards}); }
