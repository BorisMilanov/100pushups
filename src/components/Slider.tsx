import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const SliderWithSwiper = () => {
  const [globalName, setGlobalName] = useState("Default Name");

  const handleGlobalNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setGlobalName(e.target.value); // Update the global name for all slides
  };

  return (
    <div>
      {/* Input to set name for all slides */}
      <div style={{ marginBottom: "16px", textAlign: "center" }}>
        <input
          type="text"
          value={globalName}
          onChange={handleGlobalNameChange}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "50%",
          }}
          placeholder="Enter a name for all slides"
        />
      </div>

      <Swiper
        spaceBetween={16}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {/* Apply the global name to all slides */}
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                minWidth: "200px",
                height: "150px",
                background: "lightgray",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                flexDirection: "column",
              }}
            >
              <p>{globalName}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderWithSwiper;
