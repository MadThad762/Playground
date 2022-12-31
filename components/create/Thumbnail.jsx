export default function Thumbnail({ images, index }) {
  return (
    <>
      <div className='hidden rounded-md sm:block sm:h-20 sm:w-20 '>
        <img
          className='rounded-md object-cover object-center sm:h-20 sm:w-20'
          src={URL.createObjectURL(images[index])}
          alt=''
        />
      </div>
      <div className='mt-1 sm:hidden'>
        <p className='text-sm text-brand-300'>{images[index].name}</p>
      </div>
    </>
  );
}
