import classNames from 'classnames';
import { useState } from 'react';
import {GrSearch} from "react-icons/gr"
export default function FilterForm() {
  const [activeTab, setActiveTab] = useState(1);

  const tabItems = [
    {
      id: 1,
      label: 'Buy',
    },
    {
      id: 2,
      label: 'Rent',
    },
    {
      id: 3,
      label: 'Sell',
    },
    {
      id: 4,
      label: 'Find Agent',
    },
  ];
  return (
    <div className="flex flex-col gap-y-2">
      {/* TAB ITEMS */}
      <div className="flex items-center gap-x-8">
        {tabItems.map((tabItem) => (
          <p
            key={tabItem.id}
            onClick={() => setActiveTab(tabItem.id)}
            className={classNames(
              'text-sm text-white/60 cursor-pointer py-0.5 px-2 hover:text-white',
              {
                '!text-white border-b-4 border-primary font-semibold':
                  activeTab === tabItem.id,
              },
            )}
          >
            {tabItem.label}
          </p>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div>
        <form className="inline-flex  items-center pl-4 pr-2 h-16 rounded-lg bg-white">
          <div className="px-6 border-r border-neutral/10 inline-flex items-center justify-center flex-col gap-y-1">
            <p className="text-sm font-semibold">Where</p>
            <input
              type="text"
              className="outline-none placeholder:text-neutral/20 text-xs placeholder:text-xs w-[60px]  text-center"
              placeholder="Anywhere"
            />
          </div>
          <div className="px-6 border-r border-neutral/10 inline-flex items-center  justify-center flex-col gap-y-1">
            <p className="text-sm font-semibold">Property Type</p>
            <input
              type="text"
              className="outline-none placeholder:text-neutral/20 text-xs placeholder:text-xs w-[68px] text-center"
              placeholder="Single Room"
            />
          </div>
          <div className="px-6 border-r border-neutral/10 inline-flex items-center justify-center flex-col gap-y-1">
            <p className="text-sm font-semibold">Price Range</p>
            <input
              type="text"
              className="outline-none placeholder:text-neutral/20 text-xs placeholder:text-xs w-[113px] text-center   "
              placeholder="Min Price - Max Price"
            />
          </div>
          <div className="ml-10 mr-[104px]">
            <p className="text-sm font-semibold">Advance Filter</p>
          </div>

              <div className='text-white'>
                <GrSearch size={24}/>
              </div>
       
        </form>
      </div>
    </div>
  );
}
