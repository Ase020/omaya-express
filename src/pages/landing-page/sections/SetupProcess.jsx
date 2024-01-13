import {
  createAccount,
  identity,
  startExchanging,
  transferMoney,
} from "../../../assets";

const setupData = [
  {
    id: 1,
    img: createAccount,
    title: "Create account",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    img: identity,
    title: "verify identity",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    img: transferMoney,
    title: "Transfer Money",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    img: startExchanging,
    title: "Start Exchanging",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Process = ({ process }) => (
  <div className="text-white border border-[#1D8751] rounded-3xl py-4 md:py-7 px-3 md:px-0 flex flex-col items-center justify-center gap-5 w-full sm:w-fit">
    <img
      src={process.img}
      alt="createAccount"
      className="object-contain w-20 h-20"
    />

    <div className="flex flex-col text-center items-center gap-3 w-full">
      <h4 className="capitalize font-semibold text-lg md:text-2xl">
        {process.title}
      </h4>
      <p className="text-base md:text-lg font-normal text-[#788099]">
        {process.desc}
      </p>
    </div>
  </div>
);

const SetupProcess = () => {
  return (
    <div className="text-white border flex flex-col gap-14 lg:py-6 2xl:py-9 px-6 lg:px-14 2xl:px-28">
      <div className="flex flex-col gap-6">
        <span className="text-[#027A48] px-4 py-2.5 bg-[#35353E] w-fit rounded-3xl font-semibold text-base">
          ● Simple.Quick.Secure
        </span>

        <h5 className="text-4xl">
          Get Set Up And{" "}
          <span className="text-[#1D8751]">Start Exchanging</span>
        </h5>
      </div>

      <div className="flex items-center flex-wrap lg:flex-nowrap flex-col md:flex-row gap-6">
        {setupData.map((process) => (
          <Process key={process.id} process={process} />
        ))}
      </div>
    </div>
  );
};

export default SetupProcess;
