import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ username, avatar_url, email }) {
  const supabase = useSupabaseClient();
  const session = useSession();
  return (
    <Disclosure as='nav' className='bg-[#1c1c1c]'>
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
                      href='/for-sale'
                      className='text-md rounded-md px-3 py-2 font-bold text-brand-300 duration-300 ease-in-out hover:scale-125 hover:text-white'
                    >
                      For Sale
                    </Link>
                    <Link
                      href='/for-lease'
                      className='text-md rounded-md px-3 py-2 font-bold text-brand-300 duration-300 ease-in-out hover:scale-125 hover:text-white'
                    >
                      For Lease
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
                        className='h-5 w-5 text-brand-400'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search'
                      name='search'
                      className='text-gray-brand-400 block w-full rounded-md border border-transparent bg-brand-700 py-2 pl-10 pr-3 leading-5 placeholder-brand-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm'
                      placeholder='Search'
                      type='search'
                    />
                  </div>
                </div>
              </div>
              <div className='flex lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
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
                          {avatar_url !== null ? (
                            <img
                              className='h-10 w-10 rounded-full'
                              src={avatar_url}
                              alt='profile picture'
                            />
                          ) : (
                            <UserIcon className='h-10 w-10 rounded-full bg-brand-400 p-1 text-brand-800' />
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
                        <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href='/profile'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700',
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
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700',
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
                                  active ? 'bg-gray-100' : '',
                                  'block border-0 bg-transparent px-4 py-2 text-left text-sm text-gray-700',
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
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {/* Current: "bg-gray-900 text-white", Default: "text-brand-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as='a'
                href='/'
                className='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/for-sale'
                className='block rounded-md px-3 py-2 text-base font-medium text-brand-300 hover:bg-gray-700 hover:text-white'
              >
                For Sale
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/for-lease'
                className='block rounded-md px-3 py-2 text-base font-medium text-brand-300 hover:bg-gray-700 hover:text-white'
              >
                For Lease
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/smoothies'
                className='block rounded-md px-3 py-2 text-base font-medium text-brand-300 hover:bg-gray-700 hover:text-white'
              >
                Smoothies
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/create'
                className='block rounded-md px-3 py-2 text-base font-medium text-brand-300 hover:bg-gray-700 hover:text-white'
              >
                Create Smoothie
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/contact'
                className='block rounded-md px-3 py-2 text-base font-medium text-brand-300 hover:bg-gray-700 hover:text-white'
              >
                Smoothies
              </Disclosure.Button>
            </div>
            <div className='border-t border-gray-700 pt-4 pb-3'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  {avatar_url !== null ? (
                    <img
                      className='h-10 w-10 rounded-full'
                      src={avatar_url}
                      alt='profile picture'
                    />
                  ) : (
                    <UserIcon className='h-10 w-10 text-[#bbbbbb]' />
                  )}
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-white'>
                    {username}
                  </div>
                  <div className='text-sm font-medium text-gray-400'>
                    {email}
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1 px-2'>
                <Disclosure.Button
                  as='a'
                  href='/profile'
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as='a'
                  href='#'
                  className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
