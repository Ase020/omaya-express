import {
  dollar,
  heroBg,
  mobile,
  referral,
  safety,
  watch,
} from "../../../assets";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${heroBg})` }}
      className="text-white bg-center bg-cover w-full h-full relative overflow-hidden"
    >
      <div className="flex justify-between gap-8 border-red-600 lg:py-6 2xl:py-9 px-6 lg:px-14 2xl:px-28">
        <div className="flex flex-col gap-3 md:mt-14 xl:mt-28  2xl:max-w-[740px]">
          <h1 className="text-lg lg:text-4xl 2xl:text-5xl font-bold">
            Welcome to OMAYA Express
          </h1>

          <p className="text-sm md:text-base text-[#788099] leading-6 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>

          <div className="flex items-center gap-5 mt-6">
            <button
              type="button"
              className="rounded-2xl md:rounded-3xl text-base bg-[#1D8751] px-5 py-3"
            >
              Contact Us
            </button>

            <button
              type="button"
              className="flex flex-row items-center gap-3 text-lg leading-6 font-medium"
            >
              <span>Watch Video</span>
              <img
                src={watch}
                alt="watch"
                className="h-10 w-10 object-contain"
              />
            </button>
          </div>
        </div>

        <img src={mobile} alt="mobile" className="object-cover w-72 xl:w-96" />
      </div>

      <div className="bg-[#1D1D23] flex flex-col gap-4 md:gap-5 xl:gap-10 py-8 md:py-16 px-4 md:px-8 w-full rounded-l-[36px] absolute bottom-0 left-6 lg:left-14 2xl:left-28">
        <div className="flex items-center justify-start capitalize gap-[120px]">
          <div className="flex flex-col gap-1">
            <h3 className="text-[#1D8751] text-5xl font-bold">10M+</h3>
            <p className="text-base text-[#788099] font-medium">
              USD Total Transactions
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#1D8751] text-5xl font-bold">100,000+</h3>
            <p className="text-base text-[#788099] font-medium">
              Sucessful Transactions
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#1D8751] text-5xl font-bold">5500+</h3>
            <p className="text-base text-[#788099] font-medium">
              Satisfied Clients
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[#1D8751] text-5xl font-bold">3+</h3>
            <p className="text-base text-[#788099] font-medium">
              Years of Experience
            </p>
          </div>
        </div>

        <div className="bg-[#35353E] h-[1px]" />

        <div className="flex items-center gap-8 2xl:gap-16">
          <div className="flex items-center gap-0 2xl:gap-12 ">
            <div className="flex flex-col gap-3 md:gap-4 w-80">
              <h5 className="capitalize text-base lg:text-xl font-semibold">
                Absolute safety
              </h5>

              <p className="text-[#788099] text-sm lg:text-base leading-5">
                Exchange confidently with OMAYA, where safety is our top
                priority.
              </p>
            </div>

            <img
              src={safety}
              alt="safety"
              className="object-contain h-24 w-24"
            />
          </div>

          <div className="flex items-center gap-0 2xl:gap-12">
            <div className="flex flex-col gap-4 w-80">
              <h5 className="capitalize text-base lg:text-xl font-semibold">
                Fast Deposits & Withdrawals
              </h5>

              <p className="text-[#788099] text-sm lg:text-base leading-5">
                Enjoy swift and seamless deposits and withdrawals
              </p>
            </div>

            <img
              src={dollar}
              alt="dollar"
              className="object-contain h-24 w-24"
            />
          </div>

          <div className="flex items-center gap-0 2xl:gap-12">
            <div className="flex flex-col gap-4 w-80">
              <h5 className="capitalize text-base lg:text-xl font-semibold">
                Invite your friend and earn
              </h5>

              <p className="text-[#788099] text-sm lg:text-base leading-5">
                Refer and Invite your friends and earn commission on each
                transaction they make with us!
              </p>
            </div>

            <img
              src={referral}
              alt="referral"
              className="object-contain h-24 w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
