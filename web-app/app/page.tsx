import dynamic from 'next/dynamic';
import { Suspense, ErrorBoundary } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const DynamicFooter = dynamic(() => import('./components/Footer'), {
  loading: () => <LoadingSpinner />,
});

const DynamicMainContent = dynamic(() => import('./components/MainContent'), {
  loading: () => <LoadingSpinner />,
});

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="text-center p-4">
      <p className="text-red-500 font-bold">Something went wrong:</p>
      <pre className="text-sm">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Try again
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingSpinner />}>
          <DynamicMainContent />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingSpinner />}>
          <DynamicFooter />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
