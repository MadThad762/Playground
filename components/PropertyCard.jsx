import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PropertyCard({ listing }) {
  const [isLoading, setLoading] = useState(true);

  function classes(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <>
      <Link href={`/listings/${listing?.id}`}>
        <div className='w-100 group rounded-b-md bg-brand-600 text-brand-300'>
          <div className='aspect-w-3 aspect-h-2 relative w-full overflow-hidden rounded-t-md'>
            <Image
              alt={listing?.title}
              src={`
                https://nkbmdolpygrwxgurnjuz.supabase.co/storage/v1/object/public/property-images/${listing.images[1]}
              `}
              width={500}
              height={500}
              className={classes(
                'cursor-pointer object-cover duration-500 ease-in-out',
                isLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0',
              )}
              onLoadingComplete={() => setLoading(false)}
            />
            <div className='absolute top-0 left-0 hidden h-full w-full flex-col items-center justify-center bg-brand-800 opacity-0 duration-300 ease-in-out group-hover:opacity-50 sm:flex'>
              <span className='text-3xl'>See Details</span>
            </div>
          </div>

          <div className='px-4 py-3'>
            <h3 className='text-2xl font-semibold text-brand-200'>
              ${listing?.price.toLocaleString('en-US')}{' '}
              <span className='text-lg text-brand-300'>
                {listing?.listing_type === 'Day to Day' && 'Per Night'}
              </span>
            </h3>
            <div>
              <span className='text mr-1.5 font-bold'>
                {listing?.number_of_beds}
              </span>
              <span className='mr-5'>bed</span>
              <span className='mr-1.5 font-bold'>
                {listing?.number_of_baths}
              </span>
              <span className='mr-5'>bath</span>
              <span className='mr-1.5 font-bold'>
                {listing?.square_footage.toLocaleString('en-US')}
              </span>
              <span className='mr-5'>sqft</span>
            </div>
            <span className='text-lg font-semibold text-brand-300'>
              {listing?.address}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
