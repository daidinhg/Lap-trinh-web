import { Col, Image, Row } from "antd";
import React from "react";
import imageProduct from "../../assets/images/pho2.jpg";
import imageProductSmall from "../../assets/images/pho1.jpg";
import { WrapperStyleColImage, WrapperStyleImageSmall } from "./style";

const ProductDetailsComponent = () => {
  return (
    <Row style={{padding:'16px', backgroundColor:'#fff'}}>
      <Col span={10}>
        <Image src={imageProduct} alt="image product" preview={false} />
        <Row style={{paddingTop: '10px', justifyContent:'space-between'}}>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="imagesmall" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="imagesmall" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="imagesmall" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="imagesmall" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="imagesmall" preview={false} />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall src={imageProductSmall} alt="imagesmall" preview={false} />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} col-12></Col>
    </Row>
  );
};

export default ProductDetailsComponent;
