import { useState } from "react";
import Modal from "./Modal";

const MenuItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer rounded-2xl overflow-hidden bg-[#FFFFFF] p-2 border-4 border-[#F8F8F8] border-solid justify-around"
      >
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1653233797467-1a528819fd4f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <span className="absolute top-3 left-3 rounded-md px-2 py-1 bg-[#FFFFFF] text-[#1F1F1F] font-semibold">
            ₼ {item?.priceSell}
          </span>
        </div>
        <div>
          <h3 className="font-medium text-[#1F1F1F] my-2">
            {item?.name[0]?.value}
          </h3>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} item={item} />
    </>
  );
};

export default MenuItem;
