import { IoLocationOutline } from 'react-icons/io5';
import Button from '../button';

export default function Recommendation() {
  return (
    <section id="recommendation" className="mt-[33px]">
      <div className="w-[1280px] mx-auto container">
        <h3 className="text-primary-2 text-[2.5rem] font-medium mb-4">
          Recommended for you
        </h3>
        <p className="text-xl mb-10">Based on your location - 1,432 listings</p>

        <div className="flex  relative w-[1280px] h-[358px]">
          <div className="bg-gradient-to-r from-[#000000] to-[#33333300] w-full h-full absolute left-0 top-0  z-10 opacity-30" />
          <img src="/images/recommendation/first-home.png" alt="First Home" />
          <img src="/images/recommendation/second-home.png" alt="Second Home" />
          <img src="/images/recommendation/third-home.png" alt="Third Home" />
          <img src="/images/recommendation/fourth-home.png" alt="Fourth Home" />
          <img src="/images/recommendation/fifth-home.png" alt="Fifth Home" />

          <div className="absolute bottom-4 left-4 z-20">
            <h4 className="text-[1.75rem] text-white font-semibold ">
              $280,000
            </h4>
            <div className="flex items-center gap-x-1 my-2">
              <IoLocationOutline className="text-white w-6 h-6" />
              <p className="text-white text-sm font-medium">
                1701 Twining Dr, Anchorage, Ak 99504
              </p>
            </div>

            <div className="flex items-center mb-1 gap-x-2">
              <p className="text-sm font-medium text-white">3 Beds</p>
              <span className="h-4 w-0.5 rounded-full bg-white" />
              <p className="text-sm font-medium text-white">2 Baths</p>
              <span className="h-4 w-0.5 rounded-full bg-white" />
              <p className="text-sm font-medium text-white">3119 sq. ft</p>
              <span className="h-4 w-0.5 rounded-full bg-white" />
              <p className="text-sm font-medium text-white">House for sale</p>
            </div>

            <h6 className="text-xs text-white mb-4">Sam Realtor</h6>

            <Button variant={'default'}>Check Out</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
