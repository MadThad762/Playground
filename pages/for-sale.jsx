import { createClient } from '@supabase/supabase-js';
import supabaseAdmin from '../utils/SupabaseAdmin';
import { useState, useEffect } from 'react';
import Property from '../components/Property';

export async function getStaticProps() {
  /* const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  ); */

  const { data } = await supabaseAdmin.from('recipes').select('*').order('id');
  return {
    props: { images: data },
  };
}

export default function ForSale({ images }) {
  return (
    <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'></div>
    </div>
  );
}
