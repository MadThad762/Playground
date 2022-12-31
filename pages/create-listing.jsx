import { FileUploader } from 'react-drag-drop-files';
import Image from 'next/image';
import Head from 'next/head';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Thumbnail from '../components/create/Thumbnail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Create() {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();
  const [uploading, setUploading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [formError, setFormError] = useState(null);
  const [images, setImages] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [listingType, setListingType] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [price, setPrice] = useState(null);
  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);
  const [squareFootage, setSquareFootage] = useState(null);
  const [city, setCity] = useState(null);
  const fileTypes = ['JPG', 'PNG', 'GIF'];

  const notify = () =>
    toast.error('Error: Please select exactly 5 images.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const notifyMissing = () =>
    toast.error(
      'Error: Please ensure that all fields have been properly filled out.',
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      },
    );

  const handleChange = (images) => {
    images.length === 5 && setImages(images);
    if (images.length !== 5 && images !== null) {
      notify();
    }
  };

  const uploadImages = async (e) => {
    e.preventDefault();
    setUploading(true);

    if (
      !images ||
      !title ||
      !listingType ||
      !propertyType ||
      !price ||
      !bedrooms ||
      !bathrooms ||
      !squareFootage ||
      !city
    ) {
      notifyMissing();
      setUploading(false);
      return;
    }

    let { data, error } = await supabase.storage
      .from('property-images')
      .upload(
        `${
          session.user.id +
          '-' +
          new Date().getTime() +
          '-' +
          Math.floor(Math.random() * 100000) +
          '-' +
          image.name
        }`,
        image,
      );

    if (error) {
      console.log('error', error);
      alert('Error uploading image');
      setImageUrl(null);
      setUploading(false);
    }

    if (data) {
      setImageUrl(
        `https://nkbmdolpygrwxgurnjuz.supabase.co/storage/v1/object/public/smoothie-images/${data?.path}`,
      );
      console.log('test', data);
      setImageUploaded(true);
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!title || !method || !rating || !image) {
      setFormError('Please fill in all the fields correctly.');
      return;
    }

    const { data, error } = await supabase
      .from('recipes')
      .insert([
        {
          created_at: new Date().toISOString,
          title,
          method,
          rating,
          imageUrl,
          user_id: session.user.id,
        },
      ])
      .select();

    if (error) {
      console.log(error);
      setFormError('Please fill in all the fields correctly.');
    }
    if (data) {
      console.log(data);
      setFormError(null);
      router.push('/smoothies');
    }
  };

  useEffect(() => {
    imageUploaded && handleSubmit();
  }, [imageUploaded]);

  return (
    <>
      <Head>
        <title>Create Listing</title>
        <meta
          name='description'
          content='Your profile is where you can view and edit your information and view your property listings'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!session ? (
        <div className='mx-auto flex h-[calc(100vh-65px)] flex-col items-center justify-center'>
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        </div>
      ) : (
        <div className='flex min-h-[calc(100vh-65px)] flex-col items-center justify-center overflow-hidden py-10 px-4 text-brand-300 sm:px-6 lg:px-8 lg:py-24'>
          <div className='relative mx-auto max-w-xl'>
            <svg
              className='absolute left-full translate-x-1/2 transform'
              width={404}
              height={404}
              fill='none'
              viewBox='0 0 404 404'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='85737c0e-0916-41d7-917f-596dc7edfa27'
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
                height={404}
                fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
              />
            </svg>
            <svg
              className='absolute right-full bottom-0 -translate-x-1/2 transform'
              width={404}
              height={404}
              fill='none'
              viewBox='0 0 404 404'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='85737c0e-0916-41d7-917f-596dc7edfa27'
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
                height={404}
                fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
              />
            </svg>
            <div className='text-center'>
              <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
              />
              {/* Same as */}
              <ToastContainer />
              <h2 className='text-3xl font-bold tracking-tight text-brand-200 sm:text-4xl'>
                New Listing
              </h2>
              <p className='mt-4 text-lg leading-6 text-brand-300'>
                Listing your properties has never been easier! Just fill out the
                simple form below and let us handle the rest.
              </p>
            </div>
            <div className='mt-12'>
              <form className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                <div className='mx-auto w-full sm:col-span-2'>
                  <FileUploader
                    handleChange={handleChange}
                    multiple={true}
                    name='images'
                    types={fileTypes}
                  >
                    <div
                      className={`mb-3 flex h-80 flex-col items-center justify-evenly rounded-md border-4 border-dashed border-brand-600`}
                    >
                      <div>
                        <div
                          className='flex cursor-pointer items-center justify-center rounded-md bg-brand-1200 px-6 py-4 font-semibold text-brand-200 duration-500 ease-in-out hover:bg-brand-1100'
                          as='button'
                        >
                          Select Images
                        </div>
                        <div className='mt-3'>
                          <p className='text-sm text-brand-400'>
                            Please select or drag and drop 5 images.
                          </p>
                        </div>
                      </div>
                      {images?.length === 5 && (
                        <div className='flex w-full flex-col items-center justify-evenly sm:flex-row'>
                          <Thumbnail images={images} index={0} />
                          <Thumbnail images={images} index={1} />
                          <Thumbnail images={images} index={2} />
                          <Thumbnail images={images} index={3} />
                          <Thumbnail images={images} index={4} />
                        </div>
                      )}
                    </div>
                  </FileUploader>
                  {/* <div className='mb-3 flex h-80 flex-col items-center justify-evenly rounded-md border-0'>
                      <div className='group relative mx-auto flex h-full w-full flex-row items-center justify-center'>
                        <Image
                          className='rounded-md object-cover'
                          src={URL.createObjectURL(images[0])}
                          alt={'User uploaded smoothie image'}
                          fill={true}
                        />
                        <button
                          onClick={() => {
                            setImages(null);
                          }}
                          className='absolute top-0 left-0 hidden h-full w-full cursor-pointer items-center justify-center rounded-md bg-brand-800 opacity-50 duration-300 ease-in-out group-hover:flex'
                        >
                          <span className='material-symbols-outlined text-8xl text-brand-400'>
                            delete
                          </span>
                        </button>
                      </div>
                    </div> */}
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium text-brand-300'
                  >
                    Title
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      required={true}
                      onChange={(e) => setTitle(e.target.value)}
                      className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='listing type'
                    className='block text-sm font-medium text-brand-300'
                  >
                    Listing type
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      onChange={(e) => setListingType(e.target.value)}
                      className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='property type'
                    className='block text-sm font-medium text-brand-300'
                  >
                    Property type
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      onChange={(e) => setPropertyType(e.target.value)}
                      className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='price'
                    className='block text-sm font-medium text-brand-300'
                  >
                    Price
                  </label>
                  <div className='mt-1'>
                    <input
                      type='number'
                      onChange={(e) => setPrice(e.target.value)}
                      className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='bedrooms'
                    className='block text-sm font-medium text-brand-300'
                  >
                    Bedrooms
                  </label>
                  <div className='mt-1'>
                    <input
                      type='number'
                      onChange={(e) => setBedrooms(e.target.value)}
                      className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='bathrooms'
                    className='block text-sm font-medium text-brand-300'
                  >
                    Bathrooms
                  </label>
                  <div className='mt-1'>
                    <input
                      type='number'
                      onChange={(e) => setBathrooms(e.target.value)}
                      className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='square footage'
                    className='block text-sm font-medium text-brand-300'
                  >
                    Square footage
                  </label>
                  <div className='mt-1'>
                    <input
                      type='number'
                      onChange={(e) => setSquareFootage(e.target.value)}
                      className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-brand-300'
                  >
                    City
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      onChange={(e) => setCity(e.target.value)}
                      className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <button
                    onClick={uploadImages}
                    className='inline-flex w-full items-center justify-center rounded-md border border-transparent bg-brand-1200 px-6 py-3 text-base font-semibold text-brand-200 duration-500 ease-in-out hover:bg-brand-1100 focus:outline-none focus:ring-0 focus:ring-brand-1200'
                  >
                    Create listing
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
