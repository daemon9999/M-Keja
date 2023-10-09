import Button from "../button";

export default function Neighbourhoods() {
  /* const cities = [
    {
      id: 1,
      cityName: 'Texas',
      sale: 350,
      rent: 420,
      agents: 78,
    },
    {
      id: 2,
      cityName: 'Atlanta',
      sale: 950,
      rent: 681,
      agents: 128,
    },
    {
      id: 3,
      cityName: 'Pennsylvania',
      sale: 130,
      rent: 101,
      agents: 28,
    },
  ]; */
  return (
    <section id="neighbourhoods" className="mt-[55px] ">
      <div className="container mx-auto max-w-[1280px]">
        {/* HEADER */}
        <div className="flex justify-between mb-[42px]">
          <div className="flex-auto">
            <h4 className="font-medium text-[2.5rem] mb-4">
              Property on neighbourhoods
            </h4>
            <p className="text-xl">Based on your location </p>
          </div>
          <p className="text-xl text-neutral/40 basis-1/2 self-end">
            Discover a curated selection of exceptional, standout properties in
            prime locations, handpicked just for you.{' '}
          </p>
        </div>

        {/* CITIES */}

        <div className="flex flex-col gap-y-10 mb-[3.25rem]">
          <div className="bg-city-1  w-full h-[480px] no-repeat"/>

            <div className="flex gap-x-10 h-[480px] w-full">
                <div className="bg-city-2 h-full  bg-no-repeat w-[820px]"/>
                <div className="bg-city-3 h-full flex-auto bg-no-repeat"/>
            </div>
          
        </div>


        <div className="flex justify-center mb-[100px]"><Button variant={'default'}>See More</Button></div>
      </div>
    </section>
  );
}
