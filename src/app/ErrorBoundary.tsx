import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message: string;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('App error boundary caught:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="grid min-h-screen place-items-center p-4">
        <Card className="max-w-xl text-center">
          <p className="text-5xl">⚠️</p>
          <h1 className="mt-4 text-3xl font-black">Có lỗi xảy ra</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Ứng dụng gặp lỗi ngoài dự kiến. Hãy tải lại trang để tiếp tục học.
          </p>
          {this.state.message && (
            <pre className="mt-4 overflow-auto rounded-2xl bg-slate-950 p-4 text-left text-xs text-slate-100">
              {this.state.message}
            </pre>
          )}
          <Button className="mt-6" onClick={() => location.reload()}>
            Tải lại trang
          </Button>
        </Card>
      </main>
    );
  }
}
