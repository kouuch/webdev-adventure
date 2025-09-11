import React from "react";
import { assets } from "../assets/asset";

const UserProfile = () => {
  return (
    <div>
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
      <div className="px-20 mt-10">
        <p className="mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          iusto ab fuga culpa numquam optio quae cupiditate quod, aspernatur
          illo est fugiat doloribus repellendus sint accusamus vel praesentium?
          Laboriosam, placeat?
        </p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        sint alias ea sunt inventore eveniet, perferendis dolore rerum eligendi
        magni tempore, exercitationem mollitia ipsa facere animi illum aut.
        Totam, id possimus, porro consequuntur nesciunt animi delectus, aut esse
        dolorum nam tempora? Cumque fugit eos recusandae, saepe itaque atque
        odio eveniet, obcaecati reprehenderit ipsam dignissimos at nemo sapiente
        omnis voluptates ad molestias corrupti repudiandae magni hic est
        adipisci amet ipsum. Voluptate optio necessitatibus dicta ratione eum
        labore consequatur. Praesentium, suscipit maiores! <br />
        Voluptatem temporibus tempora, dolorum amet, cumque maiores sit debitis,
        et minima quos magnam rem inventore culpa neque delectus adipisci
        incidunt? Eligendi veniam earum eveniet aliquam delectus nemo, quisquam
        praesentium, quibusdam ipsa maxime ipsum veritatis dignissimos cum,
        dolores tenetur aut est vitae sunt autem debitis laboriosam id incidunt.
        Amet recusandae atque itaque iure veritatis voluptate fugiat quisquam?
        Ducimus repudiandae quaerat, cum totam ipsum, quibusdam eum consectetur
        sit numquam repellat delectus suscipit possimus ut nisi qui omnis magni?
        Ratione nulla quo iusto aliquam et, illum pariatur odit, doloribus,
        aliquid incidunt saepe ipsa recusandae ducimus facilis natus numquam
        eos? Eligendi aliquam veritatis ipsam consequuntur? Cupiditate, commodi
        soluta inventore deserunt sunt eaque laudantium magnam recusandae,
        accusamus ex esse officiis? Dignissimos necessitatibus quam incidunt
        sunt.
      </div>
    </div>
  );
};

export default UserProfile;
