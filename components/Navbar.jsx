import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const user = useUser();
  const [username, setUsername] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(() => {
    user && getProfile();
  }, [user, session]);

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url, first_name, last_name`)
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data?.username);
        setAvatarUrl(data?.avatar_url);
        setFirstName(data?.first_name);
        setLastName(data?.last_name);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Disclosure as='nav' className=''>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <div className='flex items-center px-2 lg:px-0'>
                <Link href={'/'}>
                  <div className='flex-shrink-0'>
                    {/* <HomeModernIcon className='h-10 w-10 bg-brand-1100 text-brand-800 rounded-full p-1' /> */}
                    <span className='material-symbols-outlined text-3xl text-brand-1100'>
                      home_app_logo
                    </span>
                  </div>
                </Link>
                <div className='hidden lg:ml-6 lg:block'>
                  <div className='flex space-x-4'>
                    {/* Current: "bg-gray-900 text-white", Default: "text-brand-300 hover:bg-gray-700 hover:text-white" */}
                    <Link
                      href='/'
                      className='text-md rounded-md px-3 py-2 font-bold text-brand-300 duration-300 ease-in-out hover:scale-125 hover:text-white'
                    >
                      Home
                    </Link>
                    <Link
                      href='/listings'
                      className='text-md rounded-md px-3 py-2 font-bold text-brand-300 duration-300 ease-in-out hover:scale-125 hover:text-white'
                    >
                      Listings
                    </Link>
                    <Link
                      href='/smoothies'
                      className='text-md rounded-md px-3 py-2 font-bold text-brand-300 duration-300 ease-in-out hover:scale-125 hover:text-white'
                    >
                      Smoothies
                    </Link>
                    <Link
                      href='/create'
                      className='text-md rounded-md px-3 py-2 font-bold text-brand-300 duration-300 ease-in-out hover:scale-125 hover:text-white'
                    >
                      Create Smoothie
                    </Link>
                    <Link
                      href='/contact'
                      className='text-md rounded-md px-3 py-2 font-bold text-brand-300 duration-300 ease-in-out hover:scale-125 hover:text-white'
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 justify-center lg:ml-6 lg:justify-end'>
                <div className='w-full max-w-lg lg:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                      <MagnifyingGlassIcon
                        className='h-5 w-5 text-brand-300'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search'
                      name='search'
                      className='block w-full rounded-md border border-transparent bg-brand-600 py-2 pl-10 pr-3 leading-5 text-brand-300 placeholder-brand-300 focus:border-brand-1200 focus:text-brand-300 focus:outline-none focus:ring-brand-1200 sm:text-sm'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </div>
              </div>
              <div className='flex lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-brand-300 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-brand-800'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className='block h-6 w-6 stroke-2'
                      aria-hidden='true'
                    />
                  ) : (
                    <Bars2Icon
                      className='block h-6 w-6 stroke-2'
                      aria-hidden='true'
                    />
                  )}
                </Disclosure.Button>
              </div>
              {/* start */}
              <div className='hidden lg:ml-4 lg:block'>
                {session ? (
                  <div className='flex items-center'>
                    {/* Profile dropdown */}
                    <Menu as='div' className='relative flex-shrink-0'>
                      <div>
                        <Menu.Button className='flex rounded-full border-0 p-0 text-sm'>
                          {avatarUrl !== null ? (
                            <Image
                              className='h-10 w-10 rounded-md object-cover'
                              src={`https://nkbmdolpygrwxgurnjuz.supabase.co/storage/v1/object/public/avatars/${avatarUrl}?width=150`}
                              alt='profile picture'
                              width={150}
                              height={150}
                            />
                          ) : (
                            <UserIcon className='h-10 w-10 rounded-md bg-brand-400 p-1 text-brand-800' />
                          )}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-brand-700 text-brand-300 shadow-lg ring-2 ring-brand-500 focus:outline-none'>
                          <div className='flex flex-col justify-between space-y-2 border-b-2 border-brand-500 py-4 px-4'>
                            <p className='text-xl font-medium'>
                              {firstName + ' ' + lastName}
                            </p>
                            <p className='text-sm'>{user?.email}</p>
                          </div>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href='/profile'
                                className={classNames(
                                  active
                                    ? 'bg-brand-1200 text-brand-200'
                                    : 'text-brand-300',
                                  'block px-4 py-3 text-sm font-medium duration-300 ease-in-out',
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active
                                    ? 'bg-brand-1200 text-brand-200'
                                    : 'text-brand-300',
                                  'block px-4 py-3 text-sm font-medium duration-300 ease-in-out',
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => supabase.auth.signOut()}
                                className={classNames(
                                  active
                                    ? 'bg-brand-1200 text-brand-200'
                                    : ' text-brand-300',
                                  'block w-full rounded-b-md border-0 px-4 py-3 text-left text-sm font-medium duration-300 ease-in-out',
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                ) : (
                  <div className='flex h-full flex-col items-center justify-center'>
                    <Link
                      href={'/sign-in'}
                      className='bg-brand-12 flex flex-row items-center justify-center rounded-md bg-brand-1200 py-2 px-4 font-semibold text-brand-200 duration-500 ease-in-out hover:bg-brand-1100'
                    >
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
              {/* end */}
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='flex flex-col items-center space-y-2.5 px-2 pt-2 pb-3'>
              {/* Current: "bg-gray-900 text-white", Default: "text-brand-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as='a'
                href='/'
                className='block rounded-md px-3 py-2 text-xl font-bold text-brand-300'
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/listings'
                className='block rounded-md px-3 py-2 text-xl font-bold text-brand-300'
              >
                Listings
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/smoothies'
                className='block rounded-md px-3 py-2 text-xl font-bold text-brand-300'
              >
                Smoothies
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/create'
                className='block rounded-md px-3 py-2 text-xl font-bold text-brand-300'
              >
                Create Smoothie
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/contact'
                className='block rounded-md px-3 py-2 text-xl font-bold text-brand-300'
              >
                Smoothies
              </Disclosure.Button>
            </div>
            <div className='border-t border-brand-500 pt-4 pb-3'>
              <div className='flex items-center justify-between px-5'>
                <div className=''>
                  <div className='text-lg font-semibold text-white'>
                    {session ? firstName + ' ' + lastName : ''}
                  </div>
                  <div className='text-sm font-medium text-brand-300'>
                    {session ? user?.email : ''}
                  </div>
                </div>
                <div className='flex-shrink-0'>
                  {session && avatarUrl !== null && (
                    <Image
                      className='h-10 w-10 rounded-md object-cover'
                      src={`https://nkbmdolpygrwxgurnjuz.supabase.co/storage/v1/object/public/avatars/${avatarUrl}?width=150`}
                      alt='profile picture'
                      width={150}
                      height={150}
                    />
                  )}
                </div>
              </div>
              {session && (
                <div className='mt-3 flex flex-col items-center space-y-2.5 px-2'>
                  <Disclosure.Button
                    as='a'
                    href='/profile'
                    className='block rounded-md px-3 py-2 text-xl font-bold text-brand-300'
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as='a'
                    href='#'
                    className='block rounded-md px-3 py-2 text-xl font-bold text-brand-300'
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as='button'
                    onClick={() => {
                      supabase.auth.signOut();
                    }}
                    className='block rounded-md px-3 py-2 text-xl font-bold text-brand-300'
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              )}
              {!session && (
                <div>
                  <div className='mt-3 space-y-1 px-2'>
                    <Disclosure.Button
                      as='a'
                      href='/sign-in'
                      className='flex items-center justify-center rounded-md bg-brand-1200 px-3 py-2 text-base font-semibold text-brand-200 hover:bg-brand-1100'
                    >
                      Sign In
                    </Disclosure.Button>
                  </div>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
