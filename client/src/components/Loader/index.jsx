import { PacmanLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='flex min-h-96 items-center justify-center'>
      <PacmanLoader color='oklch(51.1% 0.262 276.966)' size={50} />
    </div>
  );
};

export default Loader;
