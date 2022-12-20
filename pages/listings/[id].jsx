import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

export default function ListingDetails() {
  const [listing, setListing] = useState(null);
  const supabase = useSupabaseClient();
  const router = useRouter();
  const { id } = router.query;
  const baseUrl =
    'https://nkbmdolpygrwxgurnjuz.supabase.co/storage/v1/object/public/property-images/';

  const settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: false,
    centerMode: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className:
      'object-cover object-center h-72 sm:h-96 md:h-[500px] lg:h-[700px]',
  };

  useEffect(() => {
    const fetchListing = async () => {
      const { data, error } = await supabase
        .from('listings')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.log(error);
        setListing(null);
      }
      if (data) {
        console.log(data);
        setListing(data);
      }
    };

    fetchListing();
  }, [id]);
  return (
    <div className='mx-auto max-w-screen-2xl px-0 sm:px-6 lg:px-8'>
      <div className='mt-3 mb-3 px-4 text-3xl font-semibold text-brand-200 sm:px-0'>
        <h2>{listing?.title}</h2>
      </div>
      <div className='h-72 overflow-hidden object-cover sm:h-96 sm:rounded-md md:h-[500px] lg:hidden'>
        <Slider {...settings}>
          {listing?.images.map((image, idx) => (
            <div
              key={idx}
              className='oject-cover h-72 object-center sm:h-96 md:h-[500px] lg:hidden'
            >
              <Link href={baseUrl + image} target={'_blank'}>
                <img
                  className='lg:h-hidden h-72 w-screen object-cover object-center sm:h-96 sm:w-[calc(100vw-24px)] md:h-[500px]'
                  src={baseUrl + image}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <div className='hidden lg:flex lg:h-[450px] lg:flex-row xl:h-[600px]'>
        <div className='relative mr-3 w-1/2 lg:h-[450px] xl:h-[600px]'>
          <Link href={baseUrl + listing?.images[0]} target={'_blank'}>
            <img
              className='w-full rounded-md object-cover object-center lg:h-[450px] xl:h-[600px]'
              src={baseUrl + listing?.images[0]}
              alt=''
            />
            <div className='absolute top-0 left-0 flex w-full cursor-pointer flex-row items-start justify-end rounded-md bg-brand-800 opacity-0 hover:opacity-50 lg:h-[450px] xl:h-[600px]'>
              <span className='material-symbols-outlined pr-3 pt-3 text-4xl text-brand-200'>
                open_in_new
              </span>
            </div>
          </Link>
        </div>
        <div className='grid w-1/2 grid-cols-2 gap-3 lg:h-[450px] xl:h-[600px]'>
          {listing?.images.slice(1).map((image, idx) => (
            <div key={idx} className='oject-cover relative h-1/2 object-center'>
              <Link href={baseUrl + image} target={'_blank'}>
                <img
                  className='w-screen rounded-md object-cover object-center lg:h-[219px] xl:h-[294px]'
                  src={baseUrl + image}
                />
                <div className='absolute top-0 left-0 flex w-full cursor-pointer flex-row items-start justify-end rounded-md bg-brand-800 opacity-0 hover:opacity-50 lg:h-[219px] xl:h-[294px]'>
                  <span className='material-symbols-outlined pr-3 pt-3 text-4xl text-brand-200'>
                    open_in_new
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='py-3 px-4 text-brand-300 sm:px-0'>
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
          <span className='mr-1.5 font-bold'>{listing?.number_of_baths}</span>
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
  );
}
