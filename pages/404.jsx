import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
      <div className='h-[calc(100vh-65px)] px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-brand-1100 sm:text-5xl'>
              404
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-4xl font-bold tracking-tight text-brand-200 sm:text-5xl'>
                  Page not found
                </h1>
                <p className='mt-1 text-base text-brand-300'>
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <Link
                  href='/'
                  className='inline-flex items-center rounded-md border border-transparent bg-brand-1200 px-6 py-3 text-sm font-semibold text-brand-200 shadow-sm duration-500 ease-in-out hover:bg-brand-1100 focus:outline-none focus:ring-0'
                >
                  Go back home
                </Link>
                <Link
                  href='/contact'
                  className='inline-flex items-center rounded-md border border-transparent bg-brand-500 px-6 py-3 text-sm font-semibold text-brand-200 duration-500 ease-in-out hover:bg-brand-600 focus:outline-none focus:ring-0'
                >
                  Contact support
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
