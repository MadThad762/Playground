import Head from 'next/head';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Hero from '../components/home/Hero';
import Cta from '../components/home/Cta';

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className='mx-auto max-w-screen-2xl'>
      <Head>
        <title>Miami Luxury Condos</title>
        <meta
          name='description'
          content='Your profile is where you can view and edit your information and view your property listings'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Cta />
    </div>
  );
}
