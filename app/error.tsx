'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">Oops!</h1>
        <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8">
          We're sorry for the inconvenience. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-4 bg-primary text-white rounded-2xl font-medium hover:bg-primary-dark transition-all shadow-md"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
