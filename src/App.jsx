import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu, filterMenu } from "./redux/menu/menuSlice";
import Loading from "./components/Loading";
import CategoryItem from "./components/CategoryItem";
import MenuItem from "./components/MenuItem";

const App = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const dispatch = useDispatch();
  const { data, loading, error, filteredData } = useSelector(
    (state) => state.menu
  );

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterMenu(activeCategory));
  }, [activeCategory, dispatch]);
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="container">
      <h1 className="text-xl text-[#1F1F1F] my-4 font-semibold">Menu</h1>

      <div className="flex items-center gap-6">
        <div
          onClick={() => setActiveCategory("All")}
          className={`p-2 rounded-xl min-w-[60px] duration-200 text-center cursor-pointer font-medium ${
            activeCategory === "All"
              ? "bg-[#1F1F1F] text-white"
              : "text-[#676767] bg-[#F7F7F7]"
          }`}
        >
          All
        </div>

        {data?.categories
          ?.filter((a) => !a.isArchived)
          .map((cat) => (
            <CategoryItem
              key={cat.id}
              cat={cat}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          ))}
      </div>

      <div className="my-8">
        {filteredData?.categories?.map((cat) => (
          <React.Fragment key={cat.id}>
            <h1 className="text-xl text-[#1F1F1F] my-4 font-semibold">
              {cat.name[0].value}
            </h1>

            <div className="grid grid-cols-5 gap-4 my-8">
              {cat?.menuItems
                .filter((a) => !a.isArchived)
                .map((item) => (
                  <MenuItem item={item} key={item.id} />
                ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default App;
