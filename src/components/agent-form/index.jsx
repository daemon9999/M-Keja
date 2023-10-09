import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../button';

export default function AgentForm() {
  return (
    <section id="agent-form" className="mt-20 mb-[55px]">
      <div className="container mx-auto max-w-[1280px] bg-primary-2 rounded-[24px] h-[480px] flex items-center pl-10 pr-6">
        {/* AGENT FORM */}
        <form className="flex flex-col gap-y-4 z-20 w-1/2">
          <h5 className="font-medium text-white">
            Discover the World’s Finest Agents with a Gentle Tap.{' '}
          </h5>
          <h3 className="text-white text-5xl font-bold mb-2 ">
            Find your perfect agent
          </h3>

          <div className="flex items-center">
            <input
              type="text"
              className="w-4/5 bg-white outline-none placeholder:text-neutral/20 placeholder:text-sm px-6 h-12 rounded-l text-sm  x"
              placeholder='Search agents in your area'
            />
            <Button additionalStyle='h-12 rounded-l-none' icon={AiOutlineSearch}>Search</Button>
          </div>
        </form>

        {/* PICTURES */}
        <div className='flex-auto -ml-6 z-10 flex self-end gap-x-4'>
            <div className='flex flex-col gap-y-4 relative mt-auto '>
                <span className='absolute w-full h-full bg-primary-2/20'/>
                <img src="/images/agent-form/picture-1.png"  alt="Person picture 1" />
                <img src="/images/agent-form/picture-2.png" alt="Person picture 2" />
            </div>
            <div className='flex flex-col gap-y-4 mt-auto'>
                <img src="/images/agent-form/picture-3.png"  alt="Person picture 3" />
                <img src="/images/agent-form/picture-4.png" alt="Person picture 4" />
            </div>
            <div className='flex flex-col gap-y-4 mt-auto'>
                <img src="/images/agent-form/picture-5.png"  alt="Person picture 5" />
                <img src="/images/agent-form/picture-6.png" alt="Person picture 6" />
            </div>
            <div className='flex flex-col gap-y-4 mt-auto'>
                <img src="/images/agent-form/picture-7.png"  alt="Person picture 7" />
                <img src="/images/agent-form/picture-8.png" alt="Person picture 8" />
                <img src="/images/agent-form/picture-9.png" alt="Person picture 9" />
            </div>
        </div>
      </div>
    </section>
  );
}
