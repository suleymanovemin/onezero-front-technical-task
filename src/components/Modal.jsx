const Modal = ({ item, setShowModal, showModal }) => {
  return (
    <div
      className={`fixed flex items-center justify-center w-full h-screen top-0 left-0 right-0  bg-[#0000004a] ${
        showModal ? "opacity-100 visible z-50" : "opacity-0 invisible -z-50"
      }`}
      onClick={() => setShowModal(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-4 w-1/3  flex gap-8"
      >
        <div className="w-1/3">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1653233797467-1a528819fd4f"
            alt=""
          />
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#404040] font-medium">
              {item?.name[0]?.value}
            </h2>
            <h4 className="text-[#8D8D8D]">Fast food</h4>
            <span className="text-[#1F1F1F] font-semibold">
              ₼ {item?.priceSell}
            </span>
          </div>

          <div className="flex items-center gap-6 mt-8 mb-4">
            <div className="bg-[#F7F7F7] rounded-md size-9 flex items-center justify-center font-semibold text-[20px] cursor-pointer">
              -
            </div>
            <span>1</span>
            <div className="bg-[#F7F7F7] rounded-md size-9 flex items-center justify-center font-semibold text-[20px] cursor-pointer">
              +
            </div>
          </div>

          <hr className="my-4" />
          <ul className="px-4 text-sm">
            <li className="list-disc text-[#8D8D8D]">Size: Large</li>
            <li className="list-disc text-[#8D8D8D]">
              Nuts: Hazelnut, 2 x Almond, Macadamia{" "}
            </li>
            <li className="list-disc text-[#8D8D8D]">Syrups: Vanilla, Honey</li>
            <li className="list-disc text-[#8D8D8D]">
              Fruits: Banana, 2 x Raspberry
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
