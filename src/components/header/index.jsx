import { Link } from 'react-router-dom';
import Button from '../button';

export default function Header() {
  return (
    <header className="h-20 bg-white">
      <div className="max-w-[1280px] mx-auto  h-full flex items-center  justify-between">
        {/* LEFT SIDE */}
        <div className="flex gap-x-10 items-center">
          <Link
            to={'/'}
            className="bg-primary-2  h-10 w-[180px]  flex items-center justify-center mr-10"
          >
            <h4 className="text-white font-semibold text-xl">Logo</h4>
          </Link> 
          <Link to={'/buy'}>
            <span className="px-2 py-1 rounded-full hover:bg-neutral/10 transition-colors">
              Buy
            </span>
          </Link>
          <Link to={'/rent'}>
            <span className="px-2 py-1 rounded-full hover:bg-neutral/10 transition-colors">
              Rent
            </span>
          </Link>
          <Link to={'/sell'}>
            <span className="px-2 py-1 rounded-full hover:bg-neutral/10 transition-colors">
              Sell
            </span>
          </Link>
          <Link to={'/shortlet'}>
            <span className="px-2 py-1 rounded-full hover:bg-neutral/10 transition-colors">
              Shortlet
            </span>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-x-6">
          <button className="font-medium mr-4">Manage Rentals</button>

          <Button variant={'outline'}>Login</Button>
          <Button variant={'default'}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
