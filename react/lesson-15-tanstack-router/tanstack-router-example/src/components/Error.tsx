export default function Error({ message}) {
    return (
      <main className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
            <h2 className="mb-2 text-2xl font-semibold text-red-700">
              Error
            </h2>
            <p className="leading-7 text-red-600">{message}</p>
          </div>
        </div>
      </main>
    );
  }