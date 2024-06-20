export default function MessageContainerSkeleton() {
  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="mx-auto max-w-2xl space-y-4">
        <div className="flex items-start gap-4">
          <div className="h-8 w-8 rounded-full bg-gray-300 shrink-0 animate-pulse"></div>
          <div className="grid gap-1 rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800 w-full">
            <div className="h-4 w-2/6 bg-gray-300 rounded-md animate-pulse" />
            <div className="h-2.5 w-full bg-gray-300 rounded-md animate-pulse mt-2"></div>
            <div className="h-2.5 w-2/4 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
        </div>
        <div className="flex items-start gap-4 w-3/4">
          <div className="h-8 w-8 rounded-full bg-gray-300 shrink-0 animate-pulse"></div>
          <div className="grid gap-1 rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800 w-full">
            <div className="h-4 w-2/6 bg-gray-300 rounded-md animate-pulse" />
            <div className="h-2.5 w-full bg-gray-300 rounded-md animate-pulse mt-2"></div>
            <div className="h-2.5 w-2/4 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
        </div>
        <div className="flex items-start gap-4 w-2/4">
          <div className="h-8 w-8 rounded-full bg-gray-300 shrink-0 animate-pulse"></div>
          <div className="grid gap-1 rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800 w-full">
            <div className="h-4 w-2/6 bg-gray-300 rounded-md animate-pulse" />
            <div className="h-2.5 w-full bg-gray-300 rounded-md animate-pulse mt-2"></div>
            <div className="h-2.5 w-2/4 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
        </div>
        <div className="flex items-start gap-4 w-3/4">
          <div className="h-8 w-8 rounded-full bg-gray-300 shrink-0 animate-pulse"></div>
          <div className="grid gap-1 rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800 w-full">
            <div className="h-4 w-2/6 bg-gray-300 rounded-md animate-pulse" />
            <div className="h-2.5 w-full bg-gray-300 rounded-md animate-pulse mt-2"></div>
            <div className="h-2.5 w-2/4 bg-gray-300 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
