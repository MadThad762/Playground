import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function PropertyCard() {
  const [isLoading, setLoading] = useState(true);

  function classes(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <>
      <Link href={'/'} target={'_blank'}>
        <div className='w-100 group rounded-b-md bg-brand-600 text-brand-300'>
          <div className='aspect-w-3 aspect-h-2 relative w-full overflow-hidden rounded-t-md bg-gray-200'>
            <Image
              alt=''
              src={
                'https://images.unsplash.com/photo-1597285112431-115a1f48bde2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
              }
              width={500}
              height={500}
              className={classes(
                'cursor-pointer object-cover duration-500 ease-in-out hover:opacity-75',
                isLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0',
              )}
              onLoadingComplete={() => setLoading(false)}
            />
            <div className='absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-brand-800 opacity-0 duration-300 ease-in-out group-hover:opacity-50'>
              <span className='text-3xl'>See Details</span>
            </div>
          </div>

          <div className='px-5 py-5'>
            <h3 className='text-2xl font-semibold text-brand-200'>
              {'$600,000'}
            </h3>
            <div>
              <span className='text mr-1.5 font-bold'>6</span>
              <span className='mr-5'>bed</span>
              <span className='mr-1.5 font-bold'>3</span>
              <span className='mr-5'>bath</span>
              <span className='mr-1.5 font-bold'>2400</span>
              <span className='mr-5'>sqft</span>
            </div>
            <p className='text-lg font-semibold'>Miami Florida</p>
          </div>
        </div>
      </Link>
    </>
  );
}
