import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useEffect } from 'react';
import { ToastProvider, useToast } from '../components/ui/Toast';
import { registerPwa } from '../lib/pwa';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000, gcTime: 1000 * 60 * 60, retry: 1 } },
});

function PwaEvents() {
  const toast = useToast();
  useEffect(() => {
    registerPwa((offline) =>
      toast.push(
        offline
          ? 'Đang offline — dữ liệu sẽ đồng bộ khi có mạng'
          : 'Đã online trở lại',
      ),
    );
  }, [toast]);
  return null;
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <PwaEvents />
        {children}
      </ToastProvider>
    </QueryClientProvider>
  );
}
