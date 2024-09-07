const CategoryItem = ({ cat, activeCategory, setActiveCategory }) => {
  return (
    <div
      key={cat.id}
      onClick={() => setActiveCategory(cat.name[0].value)}
      className={`p-2 rounded-xl duration-200 min-w-[60px] text-center cursor-pointer font-medium ${
        activeCategory === cat.name[0].value
          ? "bg-[#1F1F1F] text-white"
          : "bg-[#F7F7F7] text-[#676767]"
      }`}
    >
      {cat.name[0].value}
    </div>
  );
};

export default CategoryItem;
