export default function Cta() {
  return (
    <div className='relative py-16'>
      <div
        className='absolute inset-x-0 top-0 hidden h-1/2 lg:block'
        aria-hidden='true'
      />
      <div className='mx-auto max-w-screen-2xl lg:bg-transparent lg:px-8'>
        <div className='lg:grid lg:grid-cols-12'>
          <div className='relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16'>
            <div
              className='absolute inset-x-0 h-1/2 lg:hidden'
              aria-hidden='true'
            />
            <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0'>
              <div className='aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1'>
                <img
                  className='rounded-3xl object-cover object-center shadow-2xl'
                  src='https://images.unsplash.com/photo-1636984511212-302c74810f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                  alt=''
                />
              </div>
            </div>
          </div>

          <div className='relative bg-brand-700 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl'>
            <div
              className='absolute inset-0 hidden overflow-hidden rounded-3xl lg:block'
              aria-hidden='true'
            >
              <svg
                className='absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-brand-500'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                />
              </svg>
              <svg
                className='absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-brand-500'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
                />
              </svg>
            </div>
            <div className='relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0'>
              <h2
                className='text-3xl font-bold tracking-tight text-brand-200'
                id='join-heading'
              >
                Experience the heart of downtown Miami
              </h2>
              <p className='text-lg text-brand-300'>
                Enjoy the vibrant nightlife, feast on authentic Cuban cuisine,
                relax by the pool or take a dip in the ocean before winding down
                in your very own luxury apartment. See what Miami has to offer!
              </p>
              <a
                className='block w-full rounded-md border border-transparent bg-brand-1200 py-3 px-5 text-center text-base font-semibold text-white shadow-md duration-500 ease-in-out hover:bg-brand-1100 sm:inline-block sm:w-auto'
                href='#'
              >
                Explore available properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
