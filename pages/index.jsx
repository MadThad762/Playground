import Head from 'next/head';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Hero from '../components/home/Hero';
import Cta from '../components/home/Cta';

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className='mx-auto'>
      <Hero />
      <Cta />
    </div>
  );
}
