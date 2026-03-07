export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      {/* A simple, accessible loading spinner */}
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-accent"
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
