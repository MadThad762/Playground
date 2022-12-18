import Head from 'next/head';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import SmoothieCard from '../components/SmoothieCard';

export default function Smoothies() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);
  const [orderBy, setOrderBy] = useState('created_at');

  const handleDelete = (id) => {
    setSmoothies((prevSmoothies) => {
      return prevSmoothies?.filter((sm) => sm?.id !== id);
    });
  };

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .order(orderBy, { ascending: false });

      if (error) {
        setFetchError('Could not fetch the smoothies');
        setSmoothies(null);
      }
      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    };

    fetchSmoothies();
  }, [orderBy]);

  return (
    <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
      {fetchError && <p>{fetchError}</p>}
      {smoothies && (
        <div className='smoothies'>
          <div className='order-by text-base font-medium text-brand-200'>
            <p className='mb-2'>Order by:</p>
            <button
              className='mr-2.5 cursor-pointer rounded-md bg-brand-1200 px-2.5 py-1.5 duration-300 ease-in-out hover:scale-105'
              onClick={() => setOrderBy('created_at')}
            >
              Time Created
            </button>
            <button
              className='mr-2.5 cursor-pointer rounded-md bg-brand-1200 px-2.5 py-1.5 duration-300 ease-in-out hover:scale-110'
              onClick={() => setOrderBy('title')}
            >
              Title
            </button>
            <button
              className='cursor-pointer rounded-md bg-brand-1200 px-2.5 py-1.5 duration-300 ease-in-out hover:scale-110'
              onClick={() => setOrderBy('rating')}
            >
              Rating
            </button>
          </div>
          <div className='mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-3'>
            {smoothies.map((smoothie) => (
              <SmoothieCard
                key={smoothie.id}
                smoothie={smoothie}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
