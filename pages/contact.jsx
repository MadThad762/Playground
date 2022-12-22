import { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className='flex min-h-[calc(100vh-65px)] flex-col items-center justify-center overflow-hidden py-16 px-4 text-brand-300 sm:px-6 lg:px-8 lg:py-24'>
      <div className='relative mx-auto max-w-xl'>
        <svg
          className='absolute left-full translate-x-1/2 transform'
          width={404}
          height={404}
          fill='none'
          viewBox='0 0 404 404'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='85737c0e-0916-41d7-917f-596dc7edfa27'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-brand-500'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
          />
        </svg>
        <svg
          className='absolute right-full bottom-0 -translate-x-1/2 transform'
          width={404}
          height={404}
          fill='none'
          viewBox='0 0 404 404'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='85737c0e-0916-41d7-917f-596dc7edfa27'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-brand-500'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
          />
        </svg>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-brand-200 sm:text-4xl'>
            Get in touch
          </h2>
          <p className='mt-4 text-lg leading-6 text-brand-300'>
            We&apos;d love to hear from you! Please contact us with any
            questions or concerns. One of our agents will reach out to you.
          </p>
        </div>
        <div className='mt-12'>
          <form
            action='#'
            method='POST'
            className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
          >
            <div>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium text-brand-300'
              >
                First name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                />
              </div>
            </div>
            <div>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium text-brand-300'
              >
                Last name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  autoComplete='family-name'
                  className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='company'
                className='block text-sm font-medium text-brand-300'
              >
                Company
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='company'
                  id='company'
                  autoComplete='organization'
                  className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-brand-300'
              >
                Email
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='phone-number'
                className='block text-sm font-medium text-brand-300'
              >
                Phone Number
              </label>
              <div className='relative mt-1 rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 flex items-center'>
                  <label htmlFor='country' className='sr-only'>
                    Country
                  </label>
                  <select
                    id='country'
                    name='country'
                    className='h-full rounded-md border-transparent bg-transparent py-0 pl-4 pr-8 focus:ring-2 focus:ring-brand-1200'
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type='text'
                  name='phone-number'
                  id='phone-number'
                  autoComplete='tel'
                  className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 pl-20 placeholder:text-brand-300 focus:ring-2 focus:ring-brand-1200'
                  placeholder='+1 (555) 987-6543'
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-brand-300'
              >
                Message
              </label>
              <div className='mt-1'>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='block w-full rounded-md border-none bg-brand-600 py-3 px-4 shadow-sm focus:ring-2 focus:ring-brand-1200'
                  defaultValue={''}
                />
              </div>
            </div>
            <div className='sm:col-span-2'>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-brand-1200' : 'bg-brand-600',
                      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 focus:ring-brand-1200 focus:ring-offset-2',
                    )}
                  >
                    <span className='sr-only'>Agree to policies</span>
                    <span
                      aria-hidden='true'
                      className={classNames(
                        agreed ? 'translate-x-5' : 'translate-x-0',
                        'inline-block h-5 w-5 transform rounded-full border-brand-600 bg-brand-300 shadow ring-0 ring-brand-600 transition duration-200 ease-in-out',
                      )}
                    />
                  </Switch>
                </div>
                <div className='ml-3'>
                  <p className='text-base text-neutral-500'>
                    By selecting this, you agree to the{' '}
                    <a
                      href='#'
                      className='font-medium text-brand-300 underline'
                    >
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a
                      href='#'
                      className='font-medium text-brand-300 underline'
                    >
                      Cookie Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className='sm:col-span-2'>
              <button
                type='submit'
                className='inline-flex w-full items-center justify-center rounded-md border border-transparent bg-brand-1200 px-6 py-3 text-base font-semibold text-brand-200 duration-500 ease-in-out hover:bg-brand-1100 focus:outline-none focus:ring-0 focus:ring-brand-1200'
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
