
const CategoryCard = ({ title }) => {
    return (
        <div className="max-w-md mx-auto overflow-hidden space-x-2 px-2">
            <img className="w-full object-cover object-center rounded-xl" src="https://www.joinleland.com/_next/image?url=https%3A%2F%2Fsite.joinleland.com%2F_next%2Fstatic%2Fmedia%2Fmanagement-consulting.200acb08.png&w=640&q=75" alt="Image" />

            <h5 className="py-4 text-left text-base font-medium text-[#707070] tracking-tighter leading-5">{title}</h5>
        </div>

    )
}

export default CategoryCard
