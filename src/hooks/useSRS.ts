import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';
export function useSRS(){ return useQuery({queryKey:['useSRS'], queryFn: api.getDashboard}); }
