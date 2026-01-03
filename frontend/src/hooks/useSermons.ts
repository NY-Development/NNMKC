import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';

export const useSermons = () => {
  return useQuery({
    queryKey: ['sermons'],
    queryFn: () => api.get('/sermons').then(res => res.data),
  });
};