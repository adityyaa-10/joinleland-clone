const CategoryCard = ({ title }) => {
  return (
    <div className="mx-auto max-w-md space-x-2 overflow-hidden px-2">
      <img
        className="w-full rounded-xl object-cover object-center"
        src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fmanagement-consulting.200acb08.png&w=640&q=75"
        alt="Image"
      />

      <h5 className="py-4 text-left text-base font-medium leading-5 tracking-tighter text-[#707070]">
        {title}
      </h5>
    </div>
  );
};

export default CategoryCard;
