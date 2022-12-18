import Navbar from './navbar';
import {
  useUser,
  useSupabaseClient,
  useSession,
} from '@supabase/auth-helpers-react';
import { useState, useEffect } from 'react';
/* import Footer from './footer' */

export default function Layout({ children }) {
  const supabase = useSupabaseClient();
  const session = useSession();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [urlPath, setUrlPath] = useState(null);

  useEffect(() => {
    user && getProfile();
  }, [user, session]);

  useEffect(() => {
    if (urlPath) downloadImage(urlPath);
  }, [urlPath]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  }

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setUrlPath(data.avatar_url);
      }
    } catch (error) {
      alert('Error loading user data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Navbar username={username} avatar_url={avatar_url} email={user?.email} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
