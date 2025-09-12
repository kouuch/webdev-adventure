import React from "react";
import { assets } from "../assets/asset";

const UserProfile = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex justify-center items-center relative">
        <img
          src={assets.mountain}
          alt="latar belakang"
          className="w-full max-h-[200px] md:max-h-[300px] object-cover"
        />
        <img
          src={assets.profile}
          alt="profile"
          className="absolute h-25 w-25  md:w-50 md:h-50 rounded-full bg-cover mt-4 top-4 border-4 border-white object-cover hover:scale-105 transition-transform hover:border-blue-600"
        />
        <h1 className="absolute text-1xl font-bold md:text-3xl mt-3 -bottom-9 bg-white rounded-lg p-3 shadow-lg">
          My Name Amang Angkot
        </h1>
      </div>
      <div className="px-20 mt-15">
        <h1 className="text-3xl font-semibold text-center mx-auto">
          Tentang Saya
        </h1>
        <p className="text-gray-500 text-sm text-center mt-2 max-w-lg mx-auto">
          Koleksi karya-karya saya yang penuh tujuan dan emosi. Setiap desain
          membawa makna dan keindahan.
        </p>
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 px-8 md:px-0 pt-2 gap-10">
          <div className="size-[450px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-amber-200"></div>
          <div className="py-10 border-b md:py-0 lg:border-r md:border-b-0">
            <div className="mt-5 space-y-2">
              <h3 className="text-base font-medium text-gray-600 text-center">
                Desain yang Memikat
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Setiap produk dibuat dengan perhatian pada detail dan keindahan
                visual.
              </p>
            </div>
          </div>
          <div className="py-10 border-b md:py-0 lg:border-r md:border-b-0 md:px-10">
            <div className="mt-5 space-y-2">
              <h3 className="text-base text-gray-600 text-center">
                Pengalaman Unik
              </h3>
              <p className=" text-sm text-gray-500 text-center">
                Menciptakan pengalaman yang menyentuh hati dan memberikan kesan
                mendalam.
              </p>
            </div>
          </div>
          <div className="py-10 border-b md:py-0 md:border-b-0 md:px-10">
            <div className="mt-5 space-y-2">
              <h3 className="text-base text-gray-600 text-center">
                Keselarasan dalam Setiap Karya
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Setiap elemen bekerja bersama untuk menciptakan harmoni yang
                sempurna.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default UserProfile;
