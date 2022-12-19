import { createClient } from '@supabase/supabase-js';
import supabaseAdmin from '../utils/SupabaseAdmin';
import { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';

export async function getStaticProps() {
  const { data } = await supabaseAdmin.from('recipes').select('*').order('id');
  return {
    props: { images: data },
  };
}

export default function properties() {
  return (
    <div className='mx-auto max-w-screen-2xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:gap-8'>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
}
