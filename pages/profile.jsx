import Head from 'next/head';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react';
import PageHeading from '../components/profile/PageHeading';
import { useState, useEffect } from 'react';
import Avatar from '../components/Avatar';

export default function Profile() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatar_Url] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url, first_name, last_name`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
        setFirstName(data.first_name);
        setLastName(data.last_name);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;
      alert('Profile updated!');
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

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
        <div>
          <PageHeading
            name={firstName + ' ' + lastName}
            avatar_url={avatarUrl}
            session={session}
            user={user}
            supabase={supabase}
          />
          {/* <Account /> */}
          <div className='flex flex-col items-center text-brand-300'>
            {/* <div className='mx-auto mt-56 flex bg-brand-1200 text-center text-brand-100'>
              <Avatar
                uid={user.id}
                url={avatar_url}
                avatarUrl={avatarUrl}
                setAvatar_url={setAvatarUrl}
                size={150}
                onUpload={(url) => {
                  setAvatar_Url(url);
                  updateProfile({ username, website, avatar_url: url });
                }}
              />
            </div> */}
            {/* <div>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='text'
                value={session.user.email}
                disabled
              />
            </div>
            <div>
              <label htmlFor='username'>Username</label>
              <input
                id='username'
                type='text'
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='website'>Website</label>
              <input
                id='website'
                type='website'
                value={website || ''}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>

            <div>
              <button
                className='button primary block'
                onClick={() => updateProfile({ username, website, avatar_url })}
                disabled={loading}
              >
                {loading ? 'Loading ...' : 'Update'}
              </button>
            </div>

            <div>
              <button
                className='button block'
                onClick={() => supabase.auth.signOut()}
              >
                Sign Out
              </button>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
