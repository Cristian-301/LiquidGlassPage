"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Testate() {
  const [brands, setBrands] = useState([]);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          `https://crm.careholding.it/ws/Call/?Cat=Blog&met=GetPostsRS&np=0`
        );
        setPosts(res.data);
        setFilteredPosts(res.data);

        const uniqueCatValues = [
          ...new Set(res.data.map((post) => post.IdCategory)),
        ];
        const postsByUniqueCat = {};

        uniqueCatValues.forEach((uniqueCatValue) => {
          const filteredPosts = res.data.filter(
            (post) => post.IdCategory === uniqueCatValue && post?.Stato === 1 // Optional chaining for 'Stato'
          );
          postsByUniqueCat[uniqueCatValue] = filteredPosts;
        });

        setBrands(postsByUniqueCat);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        HANNO SCRITTO DI NOI
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className="w-full px-4"
      >
        {Object.values(brands).map(postsWithSameCat => {
          const categoryId = postsWithSameCat[0].IdCategory;
          const postsWithSameCategory = posts.filter(post => post.IdCategory === categoryId);
          const isActive = JSON.stringify(filteredPosts) === JSON.stringify(postsWithSameCategory);
          return(
          <SwiperSlide key={postsWithSameCat[0].IdCategory} className="flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden flex items-center justify-center">
              <Image
                src={postsWithSameCat[0].ImgLogo}
                alt="Logo Redazione"
                className="object-cover w-full h-full"
                width={100}
                height={100}
              />
            </div>
          </SwiperSlide>
        )})}
      </Swiper>
    </div>
  );
}
