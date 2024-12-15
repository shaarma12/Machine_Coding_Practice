import React from "react";
const EmpCard = ({ data, onClick, removeEmp }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center mt-3">
        <div
          className="flex justify-evenly items-center w-[20rem] h-[5rem] bg-[#d8d8cfab] rounded-tl-full rounded-bl-full cursor-pointer"
          onClick={onClick}
        >
          <img
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            alt="user"
            className="w-[4.5rem] h-[4.5rem] rounded-full"
          />
          <p className="font-bold text-xl font-serif w-[15rem]">
            {data?.firstName} {data?.lastName}
          </p>
        </div>
      </div>
      <div className="h-[5rem] mt-3 bg-[#d8d8cfab] flex justify-center items-center rounded-tr-full rounded-br-full cursor-pointer px-2">
        <img
          src="https://cdn3.iconfinder.com/data/icons/faticons/32/remove-01-512.png"
          alt="cross"
          className="w-8 h-[3rem] hover:scale-y-105"
          onClick={() => {
            removeEmp(data?.phoneNumber);
          }}
        />
        </div>
    </div>
  );
};

export default EmpCard;
