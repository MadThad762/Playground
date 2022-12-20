import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Analytics',
    href: '#',
    description:
      'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    href: '#',
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    href: '#',
    description:
      'Build strategic funnels that will drive your customers to convert',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Hero() {
  return (
    <div className='relative'>
      <main className='lg:relative'>
        <div className='mx-auto w-full max-w-screen-2xl pt-16 pb-20 text-center lg:py-48 lg:text-left'>
          <div className='px-4 sm:px-8 lg:w-1/2 xl:pr-16'>
            <h1 className='text-4xl font-bold tracking-tight text-brand-200 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl xl:leading-tight'>
              <span className='block xl:inline'>
                Finding the perfect Miami oasis
              </span>{' '}
              <span className='block text-brand-1100 xl:inline'>
                just got easier
              </span>
            </h1>
            <p className='mx-auto mt-3 max-w-md text-lg text-brand-300 sm:text-xl md:mt-5 md:max-w-3xl'>
              Whether you&apos;re looking to rent, buy, or just get away for the
              weekend, we&apos;ve got you covered! With luxury properties
              oceanside and in the heart downtown Miami, your Florida oasis is
              just a few clicks away!
            </p>
            <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
              <div className='rounded-md shadow'>
                <a
                  href='#'
                  className='flex w-full items-center justify-center rounded-md border border-transparent bg-brand-1200 px-8 py-3 text-base font-semibold text-white duration-500 ease-out hover:bg-brand-1100 md:py-4 md:px-10 md:text-lg'
                >
                  Get started
                </a>
              </div>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <a
                  href='#'
                  className='flex  w-full items-center justify-center rounded-md border border-transparent bg-brand-500 px-8 py-3 text-base font-semibold text-brand-200 duration-500 ease-out hover:bg-brand-600 md:py-4 md:px-14 md:text-lg'
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='https://images.unsplash.com/photo-1632991019541-7a9f9f7c1f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1885&q=80'
            alt=''
          />
        </div>
      </main>
    </div>
  );
}
