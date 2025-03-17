import Link from "next/link";
import React from "react";

const AddressSection = ({
  address,
  latitude = 35.7,
  longitude = 51.4,
}: {
  address?: string;
  latitude?: number;
  longitude?: number;
}) => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  return (
    <div className="flex justify-between items-center  py-3  bg-[#fae3ba] rounded-lg  transition-all px-3 w-full ">
      <p className="text-sm text-gray-600">{address}</p>
      <button
        onClick={() => openLink(googleMapsUrl)}
        className="mt-2 px-4 py-2 text-sm font-medium text-[#005f4e] border border-[#005f4e] bg-[#fae3ba] rounded-lg hover:bg-[#c1a990] hover:text-[#005f4e] transition-all"
        //   onClick={()=>{}}
      >
        مشاهده روی نقشه
      </button>
    </div>
  );
};

export default AddressSection;
