import supabaseAdmin from '../utils/SupabaseAdmin';
import PropertyCard from '../components/PropertyCard';
import ListingHeading from '../components/listings/ListingHeading';
import { useState, useEffect } from 'react';
import Head from 'next/head';

export async function getStaticProps() {
  const { data } = await supabaseAdmin
    .from('listings')
    .select('*')
    .order('created_at', { ascending: false });
  return {
    props: {
      listings: data,
    },
  };
}

/* const handleDelete = (id) => {
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
}, [orderBy]); */

export default function Listings({ listings }) {
  const [selectedCategory, setSelectedCategory] = useState('For Sale');
  const [sortedListings, setSortedListings] = useState([]);

  useEffect(() => {
    setSortedListings(
      listings?.filter((listing) => listing?.listing_type === selectedCategory),
    );
  }, [selectedCategory]);

  return (
    <div className='mx-auto max-w-screen-2xl py-10 px-4 sm:px-6 lg:px-8'>
      <Head>
        <title>Listings</title>
        <meta
          name='description'
          content='Your profile is where you can view and edit your information and view your property listings'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ListingHeading
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
        {sortedListings.map((listing) => (
          <PropertyCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
