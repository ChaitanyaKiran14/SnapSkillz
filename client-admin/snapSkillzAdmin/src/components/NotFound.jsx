import React from 'react'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-2 md:px-4">
      <header className="w-full border-b bg-white pb-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          {/* Header content (you can add a logo or title here) */}
        </div>
      </header>
      <div className="mx-auto my-12 flex max-w-6xl flex-col px-2 md:my-24 lg:my-32 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-sm font-semibold text-black">404 error</h1>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            We can&apos;t find that page
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-6 flex items-center gap-x-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm"
            >
              <ArrowLeft size={16} className="mr-2" />
              Go back
            </button>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
            >
              Contact us
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://yoast.com/app/uploads/2015/08/404_error_checking_FI.png"
            alt="404"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
      {/* footer */}
      <div className="mx-auto max-w-7xl">
        {/* Footer content */}
      </div>
    </div>
  )
}
