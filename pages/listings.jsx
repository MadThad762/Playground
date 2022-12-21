import supabaseAdmin from '../utils/SupabaseAdmin';
import PropertyCard from '../components/PropertyCard';
import ListingHeading from '../components/Listings/ListingHeader';
import { useState, useEffect } from 'react';

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

export default function Listings({ listings }) {
  const [selectedCategory, setSelectedCategory] = useState('For Sale');
  const [sortedListings, setSortedListings] = useState([]);

  useEffect(() => {
    setSortedListings(
      listings?.filter((listing) => listing?.listing_type === selectedCategory),
    );
  }, [selectedCategory]);

  return (
    <div className='mx-auto max-w-screen-2xl py-3 px-4 sm:px-6 lg:px-8'>
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
