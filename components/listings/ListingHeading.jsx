import Link from 'next/link';

export default function ListingHeading({
  selectedCategory,
  setSelectedCategory,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className='relative pb-0'>
      <div className='flex items-center justify-between'>
        <h3 className='flex text-3xl font-semibold leading-6 text-brand-200'>
          Listings
        </h3>
        <Link
          href={'/create-listing'}
          className='inline-flex items-center rounded-md border border-transparent bg-brand-1200 px-4 py-2 text-sm font-semibold text-brand-100 duration-500 ease-in-out hover:bg-brand-1100 focus:outline-none focus:ring-0'
        >
          Create Listing
        </Link>
      </div>
      <div className='mt-4'>
        <div className=''>
          <nav className='-mb-px flex space-x-8 pb-4'>
            <button
              onClick={() => {
                setSelectedCategory('For Sale');
              }}
              className={classNames(
                selectedCategory === 'For Sale'
                  ? 'text-brand-1100'
                  : 'text-brand-300 hover:text-white',
                'whitespace-nowrap px-1 text-base font-medium duration-300 ease-out',
              )}
            >
              {'For Sale'}
            </button>
            <button
              onClick={() => {
                setSelectedCategory('For Lease');
              }}
              className={classNames(
                selectedCategory === 'For Lease'
                  ? 'text-brand-1100'
                  : 'text-brand-300 hover:text-white',
                'whitespace-nowrap px-1 text-base font-medium duration-300 ease-out',
              )}
            >
              {'For Lease'}
            </button>
            <button
              onClick={() => {
                setSelectedCategory('Day to Day');
              }}
              className={classNames(
                selectedCategory === 'Day to Day'
                  ? 'text-brand-1100'
                  : 'text-brand-300 hover:text-white',
                'whitespace-nowrap px-1 text-base font-medium duration-300 ease-out',
              )}
            >
              {'Day to Day'}
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
