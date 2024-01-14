import { blogCard } from "../assets";

const BlogCard = () => {
  return (
    <div className="border flex flex-col">
      <img src={blogCard} alt="" className="flex-1" />
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="">15-June-2024</span>

          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
