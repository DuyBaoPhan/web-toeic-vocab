import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';
export function useStreak(){ return useQuery({queryKey:['useStreak'], queryFn: api.getDashboard}); }
