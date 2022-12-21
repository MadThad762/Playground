import Head from 'next/head';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export default function SignIn() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const navigateToHome = () => {
    {
      router.back();
    }
  };

  return (
    <>
      <Head>
        <title>My Profile</title>
        <meta
          name='description'
          content='Your profile is where you can view and edit your information and view your property listings'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!session ? (
        <div className='mx-auto flex h-[calc(100vh-65px)] flex-col items-center justify-center'>
          <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
        </div>
      ) : (
        <div>{session && navigateToHome()}</div>
      )}
    </>
  );
}
