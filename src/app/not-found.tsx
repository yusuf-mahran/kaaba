import { Button } from '../../components/utils/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-6">
      <div className="space-y-2">
        <h2 className="text-8xl font-black text-gray-900 tracking-tighter">
          404
        </h2>
        <p className="text-2xl font-semibold text-gray-800">Page not found</p>
        <p className="text-gray-600 max-w-sm mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been removed or the link is incorrect.
        </p>
      </div>

      <Button href="/">Return to Homepage</Button>
    </div>
  );
}
