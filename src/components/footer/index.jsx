import { Link } from 'react-router-dom';
import {BsTwitter} from "react-icons/bs"
import {BiLogoLinkedin} from "react-icons/bi"
import {TfiFacebook} from "react-icons/tfi"
export default function Footer() {
  return (
    <footer id="footer" className="bg-primary h-[383px] flex items-center justify-center">
      <div className="max-w-[1160px] mx-auto container ">
        {/* TOP PART */}
        <div className="flex items-start w-full justify-between">
          <Link to={'/'} className="h-28 w-auto">
            <img src="/images/logo/footer-logo.png" className='h-full w-auto' alt="AFRI Logo" />
          </Link>


          <div className='flex gap-x-[120px] pr-[162px]'>

              <div className='flex flex-col gap-y-6'>
                <h5 className='text-xl text-primary-2 font-semibold'>Company</h5>
                <p className='text-white'>Rent</p>
                <p className='text-white'>Buy</p>
                <p className='text-white'>Sell</p>
              </div>

              <div className='flex flex-col gap-y-6'>
                <h5 className='text-xl text-primary-2 font-semibold'>About</h5>
                <p className='text-white'>Manage Apartments</p>
                <p className='text-white'>Find an Agent</p>
                <p className='text-white'>About us</p>
              </div>


              <div className='flex flex-col gap-y-6 mt-auto'>
                <p className='text-white'>Help Center</p>
                <p className='text-white'>Real Estate news</p>
                <p className='text-white'>Become an agent</p>
              </div>


          </div>
        </div>



        {/* DIVIDER */}
        <span className='w-full h-0.5 bg-[#D9D9D9] mt-16 mb-[18px] flex '/>

        <div className='flex items-center gap-x-6'>
          <BsTwitter className='text-primary-2 cursor-pointer' size={20}/>
          <BiLogoLinkedin className='text-primary-2 cursor-pointer' size={23}/>
          <TfiFacebook className='text-primary-2 cursor-pointer' size={18}/>


          <div className='mx-auto flex items-center gap-x-10'>
              <p className='text-white'>Terms & Conditions</p>
              <p className='text-white'>2023 Copyright M-Keja</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
