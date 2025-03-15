import React from "react";

const AddressSection = ({
  address,
  langtitue,
  attitude,
}: {
  address?: string;
  langtitue?: string;
  attitude?: string;
}) => {
  return (
    <div className="flex justify-between items-center  py-3  bg-[#fae3ba] rounded-lg  transition-all px-3 w-full ">
      <p className="text-sm text-gray-600">{address}</p>
      <button
        className="mt-2 px-4 py-2 text-sm font-medium text-[#005f4e] border border-[#005f4e] bg-[#fae3ba] rounded-lg hover:bg-[#c1a990] transition-all"
        //   onClick={()=>{}}
      >
        مشاهده روی نقشه
      </button>
    </div>
  );
};

export default AddressSection;
