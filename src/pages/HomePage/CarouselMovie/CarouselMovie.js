import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { movieSer } from "../../../service/movieSer";

const CarouselMovie = () => {
  const [dataBan, setDataBan] = useState([]);
  const carouRef = useRef();
  const fetchBannerMovie = async () => {
    try {
      const dataBanner = await movieSer.getBannerMovie();
      let newDataBanner = dataBanner.data.content;
      setDataBan(newDataBanner);
      console.log("databanner: ", dataBanner);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    // call api
    fetchBannerMovie();
  }, []);
  return (
    <div>
      <Carousel ref={carouRef}>
        {/* Map */}
        {dataBan.map((banner) => {
          return (
            <div key={banner.maBanner} className="w-full">
              <img
                style={{ height: "500px" }}
                className="w-full"
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
      <button
        onClick={() => {
          carouRef.current.next();
        }}
        className="bg-blue-500 p-2 rounded mx-3"
      >
        Next
      </button>
      <button
        onClick={() => {
          carouRef.current.prev();
        }}
        className="bg-blue-500 p-2 rounded"
      >
        Pre
      </button>
    </div>
  );
};

export default CarouselMovie;
