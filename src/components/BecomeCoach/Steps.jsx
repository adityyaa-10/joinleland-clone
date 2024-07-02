import Image from "next/image";
const Steps = () => {
  return (
    <div className="mx-auto mb-24 grid max-w-[1500px] grid-cols-12 gap-5 px-4 delay-200 lg:mb-36 lg:px-12">
      <div className="col-span-12 mb-8 flex flex-col items-center text-center lg:col-span-3 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
        <div className="flex h-[70px] w-full items-center justify-center lg:items-start lg:justify-start">
          <Image src={"/apply.svg"} width={44} height={44} />
        </div>
        <p className="text-leland-gray-dark mb-2 text-lg font-medium">Apply</p>
        <p className="text-leland-gray-light w-2/3 text-lg lg:w-auto">
          Build your coach profile and tell us about your expertise
        </p>
      </div>

      <div className="col-span-12 mb-8 flex flex-col items-center text-center lg:col-span-3 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
        <div className="flex h-[70px] w-full items-center justify-center lg:items-start lg:justify-start">
          <Image src={"/getapproved.svg"} width={36} height={40} />
        </div>
        <p className="text-leland-gray-dark mb-2 text-lg font-medium">
          Get approved
        </p>
        <p className="text-leland-gray-light w-2/3 text-lg lg:w-auto">
          Our team reviews your profile to ensure the best coaches join Leland
        </p>
      </div>

      <div className="col-span-12 mb-8 flex flex-col items-center text-center lg:col-span-3 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
        <div className="flex h-[70px] w-full items-center justify-center lg:items-start lg:justify-start">
          <Image src={"/startcoaching.svg"} width={39} height={40} />
        </div>
        <p className="text-leland-gray-dark mb-2 text-lg font-medium">
          Start coaching
        </p>
        <p className="text-leland-gray-light w-2/3 text-lg lg:w-auto">
          We’ll review your information and give you the green light to start
          coaching!
        </p>
      </div>

      <div className="col-span-12 mb-8 flex flex-col items-center text-center lg:col-span-3 lg:mb-0 lg:items-start lg:px-8 lg:text-left">
        <div className="flex h-[70px] w-full items-center justify-center lg:items-start lg:justify-start">
          <Image src={"/buildbusiness.svg"} width={44} height={45} />
        </div>
        <p className="text-leland-gray-dark mb-2 text-lg font-medium">
          Build your business
        </p>
        <p className="text-leland-gray-light w-2/3 text-lg lg:w-auto">
          Earn money, build your brand, and guide the next generation of leaders
        </p>
      </div>
    </div>
  );
};

export default Steps;
