import Button from '../button';

export default function About() {
  return (
    <section id="about" className="bg-[#F4F4F4]">
      <div className="container max-w-[1262px] mx-auto pt-6 pb-10">
        <h4 className="text-primary-2 text-[2rem] font-bold text-center mb-6">
          About Us
        </h4>

        <div className="flex justify-between">
          {/* LEFT SIDE */}
          <div className="w-[45%]">
            <h5 className="text-[2rem] font-bold ">
              Unlocking Real Estate for All. Your Key to Infinite Possibilities.
            </h5>

            <div className="w-[536px] mt-6 mb-12">
              <p className="text-3.75">
                We are on a mission to transform the real estate landscape,
                making it accessible to everyone. We believe that finding the
                perfect home or property should be an exciting and inclusive
                journey for all, and that starts with you in control of your
                personal Information.{' '}
              </p>
            </div>

            <h6 className=" text-primary text-xl font-bold">
              THE POWER IS YOURS
            </h6>
            <div className="w-[204px] h-0.5 bg-primary rounded-[2px] mt-1 mb-4" />

            <div className="mb-16">
              <p className="text-sm">
                Our innovative platform redefines real estate by putting the
                power in your hands. We provide you with invaluable insights and
                guidance based on the data you provide, allowing you to shape
                your real estate journey according to your preferences.Discover
                a world where your real estate aspirations are not just within
                reach but are made achievable effortlessly, and where you have
                full control over your personal information. With [website
                name], you hold the key to realising your property dreams on
                your terms.
              </p>
            </div>

            <Button variant={'default'}>Learn more</Button>
          </div>

          {/* RIGHT SIDE */}
          <div className="-mt-10">
            <div className="relative py-6 px-3 border-[4.381px] border-neutral/20  rounded-t-[219px] rounded-b-[16px]  ">
              <img src="/images/about/image-2.png" alt="About Image 2" />

              <div className="px-6 pb-[23px] pt-[26px] absolute -left-52 -bottom-10 border-neutral/20 border-[4.381px] rounded-tl-[164px] rounded-tr-[6.54px] rounded-b-[16px]">
                <img src="/images/about/image-1.png" alt="About Image 1 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
