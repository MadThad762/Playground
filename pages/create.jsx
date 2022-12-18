import Head from 'next/head';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FileUploader } from 'react-drag-drop-files';
import Image from 'next/image';

export default function Create() {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();
  const [uploading, setUploading] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [rating, setRating] = useState('');
  const [formError, setFormError] = useState(null);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const date = new Date();

  const fileTypes = ['JPG', 'PNG', 'GIF'];

  const handleChange = (image) => {
    setImage(image);
  };

  const uploadImage = async () => {
    setUploading(true);

    if (!image || !title || !method || !rating) {
      console.log('You must select an image to upload.');
      return;
    }

    let { data, error } = await supabase.storage
      .from('smoothie-images')
      .upload(
        `${
          session.user.id +
          '-' +
          date.getTime() +
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
      .insert([{ title, method, rating, imageUrl, user_id: session.user.id }])
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
    <div className='mx-auto flex min-h-[calc(100vh-65px)] w-full max-w-2xl flex-col items-center justify-center py-20 px-4 sm:px-6 sm:py-32 lg:px-8'>
      <div className='mx-auto w-full'>
        {!image && (
          <FileUploader
            handleChange={handleChange}
            name='image'
            types={fileTypes}
          >
            <div
              className={`mb-3 flex h-80 flex-col items-center justify-evenly rounded-md border-4 border-dashed border-brand-600`}
            >
              <div>
                <div
                  className='flex cursor-pointer items-center justify-center rounded-md bg-brand-1200 px-6 py-4 font-semibold text-brand-200 duration-300 ease-in-out hover:scale-110 hover:bg-brand-1100'
                  as='button'
                >
                  Select Image
                </div>
                <div className='mt-3'>
                  <p className='text-sm text-brand-400'>
                    ...or drag and drop image.
                  </p>
                </div>
              </div>
            </div>
          </FileUploader>
        )}
        {image && (
          <div className='mb-3 flex h-80 flex-col items-center justify-evenly rounded-md border-0'>
            <div className='group relative mx-auto flex h-full w-full flex-row items-center justify-center'>
              <Image
                className='rounded-md object-cover'
                src={URL.createObjectURL(image)}
                alt={'User uploaded smoothie image'}
                fill={true}
              />
              <button
                onClick={() => {
                  setImage(null);
                }}
                className='absolute top-0 left-0 hidden h-full w-full cursor-pointer items-center justify-center rounded-md bg-brand-800 opacity-50 duration-300 ease-in-out group-hover:flex'
              >
                <span className='material-symbols-outlined text-8xl text-brand-400'>
                  delete
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      <form
        className='mt-6 flex w-full flex-col justify-between space-y-6' /* onSubmit={uploadImage} */
      >
        <div className='mx-auto flex w-full flex-col'>
          <label
            className='sr-only font-semibold text-brand-300'
            htmlFor='title'
          >
            Title:
          </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={'Title'}
            className={
              'w-full rounded-md border-none bg-brand-600 py-2.5 pl-5 font-normal text-brand-300 focus:ring-2 focus:ring-brand-1200'
            }
          />
        </div>

        <div className='mx-auto flex w-full flex-col'>
          <label className='sr-only' htmlFor='method'>
            Method:
          </label>
          <textarea
            id='method'
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            placeholder={'Method'}
            rows={4}
            className={
              'w-full rounded-md border-none bg-brand-600 py-2.5 pl-5 font-normal text-brand-300 focus:ring-2 focus:ring-brand-1200'
            }
          />
        </div>

        <div className='mx-auto flex w-full flex-col'>
          <label className='sr-only' htmlFor='rating'>
            Rating:
          </label>
          <input
            type='number'
            id='rating'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder={'Rating'}
            className={
              'w-full rounded-md border-none bg-brand-600 py-2.5 pl-5 font-normal text-brand-300 focus:ring-2 focus:ring-brand-1200'
            }
          />
        </div>
        {formError && <p className='error'>{formError}</p>}
      </form>
      <button
        onClick={() => {
          uploadImage();
        }}
        className='mt-6 w-full rounded-md bg-brand-1200 px-6 py-4 font-semibold text-brand-200 duration-300 ease-in-out hover:scale-105 hover:bg-brand-1100'
      >
        Create Smoothie
      </button>
    </div>
  );
}
