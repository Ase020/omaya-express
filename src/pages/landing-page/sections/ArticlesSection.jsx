import { useState } from "react";

const ArticlesSection = () => {
  const [value, setValue] = useState("news");
  return (
    <div className="lg:py-6 2xl:py-9 px-6 lg:px-14 2xl:px-28 border flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <span className="text-[#027A48] px-4 py-2.5 bg-[#35353E] w-fit rounded-3xl font-semibold text-base">
          ● Articles
        </span>

        <h5 className="text-4xl leading-tight font-bold md:max-w-lg">
          Enjoy Our <span className="text-[#1D8751]">Blog</span> On the{" "}
          <span className="text-[#1D8751]">Latest Company Updates</span>
        </h5>

        <form className="flex items-center w-fit">
          <label
            className={`cursor-pointer flex items-center gap-2 px-4 py-2.5 ${
              value === "news" && "bg-[#1D8751] text-white"
            } border border-[#788099] rounded-l-3xl text-[#788099] font-semibold`}
            onClick={() => setValue("news")}
          >
            <input
              type="radio"
              name="category"
              value={value}
              checked={value === "news"}
            />
            News
          </label>

          <label
            className={`cursor-pointer flex items-center gap-2 px-4 py-2.5 ${
              value === "blog" && "bg-[#1D8751] text-white"
            } border border-[#788099] rounded-r-3xl text-[#788099] font-semibold`}
            onClick={() => setValue("blog")}
          >
            <input
              type="radio"
              name="category"
              value={value}
              checked={value === "blog"}
            />
            Blog
          </label>
        </form>
      </div>
      <div className="">olali</div>
      <div className="">nyalenda</div>
    </div>
  );
};

export default ArticlesSection;
