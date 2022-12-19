import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';

export default function PageHeading({ name, avatar_url, user }) {
  const [uploading, setUploading] = useState(false);
  const supabase = useSupabaseClient();
  const session = useSession;
  const date = new Date();

  const uploadAvatar = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const filePath = user?.id + '-' + date.getTime() + '-' + file.name;

      let { data, error } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      if (data) {
        try {
          let { error } = await supabase
            .from('profiles')
            .update({ avatar_url: filePath })
            .eq('id', user.id);
          if (error) throw error;
          alert('Profile updated!');
        } catch (error) {
          alert('Error updating the data!');
          console.log(error);
        }
      }
    } catch (error) {
      alert('Error uploading avatar!');
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <div>
        <img
          className='h-32 w-full object-cover lg:h-48'
          src={
            'https://images.unsplash.com/photo-1519334538828-dac4feed79cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3800&q=80'
          }
          alt='profile banner'
        />
      </div>
      <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
        <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
          <div className='relative flex'>
            <label htmlFor='file-input'>
              <img
                className='h-24 w-24 rounded-md bg-brand-800 object-cover ring-4 ring-brand-800 sm:h-32 sm:w-32'
                src={`https://nkbmdolpygrwxgurnjuz.supabase.co/storage/v1/object/public/avatars/${avatar_url}?width=250`}
                alt='profile picture'
              />
              <div className='h-24-w-24 absolute top-0 left-0 flex cursor-pointer flex-col items-center justify-center rounded-md bg-brand-800 opacity-0 duration-500 ease-in-out hover:opacity-50 sm:h-32 sm:w-32'>
                <span className='material-symbols-outlined text-4xl text-brand-200'>
                  upload
                </span>
                <span className='text-2l font-medium text-brand-200'>
                  Upload
                </span>
              </div>
            </label>
            <input
              onChange={(event) => {
                uploadAvatar(event);
              }}
              id={'file-input'}
              className='h-0 w-0'
              type='file'
              disabled={uploading}
            />
          </div>
          <div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
            <div className='mt-6 min-w-0 flex-1 sm:hidden md:block'>
              <h1 className='truncate text-2xl font-bold text-brand-300'>
                {name}
              </h1>
            </div>
            <div className='justify-stretch mt-6 flex flex-col'>
              <button
                type='button'
                className='inline-flex justify-center rounded-md bg-brand-1200 px-4 py-2 font-semibold text-brand-200 shadow-sm duration-500 ease-in-out hover:bg-brand-1100 focus:outline-none focus:ring-0'
              >
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
        </div>
        <div className='mt-6 hidden min-w-0 flex-1 sm:block md:hidden'>
          <h1 className='truncate text-2xl font-bold text-gray-300'>{name}</h1>
        </div>
      </div>
    </div>
  );
}
