import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <button className="px-8 py-4 bg-primary text-white rounded-2xl font-medium hover:bg-primary-dark transition-all shadow-md">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
