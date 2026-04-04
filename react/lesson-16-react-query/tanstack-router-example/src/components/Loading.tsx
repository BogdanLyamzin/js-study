

export default function Loading({message}) {
    return (
      <main className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-700" />
              <p className="text-base text-gray-600">{message}</p>
            </div>
          </div>
        </div>
      </main>
    );
  }