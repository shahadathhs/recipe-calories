import hero from '../../assets/img/2ecc1f24-36be-4191-af50-f10f56c39539.jpg'

const Banner = () => {
  return (
    <div className='p-4 space-y-4'>
      <div className="hero min-h-screen">
        <img className="hero min-h-screen rounded-3xl" src={hero} alt="" />
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-extrabold">Hello there!</h1>
            <p className="mb-5 text-xl lg:text-3xl font-medium lg:font-bold">Discover an exceptional cooking class tailored for you!</p>
            <div className='flex gap-3 justify-center'>
              <button className="btn btn-primary bg-green-500 border-none text-black">Explore Now</button>
              <button className="btn btn-primary bg-black bg-opacity-0 text-white">Our Feedback</button>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center space-y-2'>
        <h5 className='text-5xl font-extrabold'>Our Recipes</h5>
        <p className=' text-gray-500 font-bold pt-2'>As our restaurant is for international customers, we have recipes from all around the world. Explore our website and fulfill your requirements.</p>
      </div>
    </div>
  );
};

export default Banner;