import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';

export default function Example({ open, setOpen, image }) {
  const baseUrl =
    'https://nkbmdolpygrwxgurnjuz.supabase.co/storage/v1/object/public/property-images/';

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-brand-800 transition-opacity duration-500 ease-out' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='mx-auto flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-brand-800 duration-500 ease-out'>
                <div className='relative mx-auto flex h-screen w-full max-w-screen-2xl flex-col items-center justify-center px-6 text-brand-300 lg:px-8'>
                  <div className='absolute top-0 left-0 mt-6 ml-6 lg:ml-8'>
                    <button
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <span className='material-symbols-outlined text-4xl duration-500 ease-in-out hover:opacity-75'>
                        cancel
                      </span>
                    </button>
                  </div>
                  <div className='aspect-w-16 aspect-h-9 relative mx-auto flex w-full items-center justify-center'>
                    {image && (
                      <Image
                        className='rounded-md object-cover object-center'
                        src={baseUrl + image}
                        alt={image}
                        fill={true}
                      />
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
