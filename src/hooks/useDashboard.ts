import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';
export function useDashboard(){ return useQuery({queryKey:['useDashboard'], queryFn: api.getDashboard}); }
