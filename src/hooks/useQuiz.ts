import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';
export function useQuiz(){ return useQuery({queryKey:['useQuiz'], queryFn: api.getDashboard}); }
