import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import comtam from "../../assets/images/comtam.webp";
import pho from "../../assets/images/pho.jpg";
import fastfood from "../../assets/images/fastfood.jpg";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomePage = () => {
  const arr = ["Thức ăn nhanh", "Cơm tấm", "Phở"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
        <div
          id="container"
          style={{ backgroundColor: "#efefef", padding: "0 120px", height:"1000px" }}
        >
          <SliderComponent arrImages={[comtam, pho, fastfood]} />
          <div style={{ marginTop: "20px", display: "flex", alignItems : 'center', gap: '20px'}}>
            <CardComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
