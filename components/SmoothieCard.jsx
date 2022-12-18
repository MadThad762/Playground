import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SmoothieCard({ smoothie, onDelete }) {
  const session = useSession();
  const supabase = useSupabaseClient();
  const [isLoading, setLoading] = useState(true);

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('recipes')
      .delete()
      .eq('id', smoothie.id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      onDelete(smoothie.id);
    }
  };

  function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className='smoothie-card w-100 relative rounded-md bg-brand-600 p-3 text-brand-300'>
      <a href={smoothie?.image} target={'_blank'}>
        <div className='ob aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-gray-200'>
          <Image
            alt=''
            src={smoothie.imageUrl}
            fill={true}
            className={cn(
              'cursor-pointer object-cover duration-500 ease-in-out hover:opacity-75',
              isLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0',
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
      </a>
      <div>
        <h3 className='mt-3 text-xl font-semibold text-brand-200'>
          {smoothie.title}
        </h3>
        <p>{smoothie.method}</p>
        <div className='absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-md bg-brand-1200 text-center font-medium leading-none text-brand-200'>
          {smoothie.rating}
        </div>
        <div className='mt-4 flex flex-row justify-end text-brand-800'>
          <Link href={'/update/' + smoothie.id}>
            <span className='material-symbols-outlined mr-2 rounded-full bg-brand-300 p-3 duration-300 ease-in-out hover:scale-110'>
              edit
            </span>
          </Link>
          <span
            onClick={() => {
              handleDelete();
            }}
            className='material-symbols-outlined cursor-pointer rounded-full bg-brand-300 p-3 duration-300 ease-in-out hover:scale-110'
          >
            delete
          </span>
        </div>
      </div>
    </div>
  );
}
