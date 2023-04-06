import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-hot-toast";
import WhySuperTech from "../Shared/WhySuperTech/WhySuperTech";
import { useGetProductQuery } from "../../features/products/productsApi";
import Loading from "../Shared/Loading/Loading";
import Error from "../Shared/Error/Error";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "../../features/orders/ordersSlice";
import PageTitle from "../../Utils/PageTitle";
import numberWithComma from "../../Utils/numberWithComa";
import { motion } from "framer-motion";
const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: product, isLoading, isError, error } = useGetProductQuery(id);
  const {
    _id,
    name,
    price,
    description,
    colors,
    sizes,
    category,
    subCategory,
    primaryImage,
    extraImages,
  } = product?.data || {};

  const finalPrimaryImage = process.env.REACT_APP_IMG_URL + primaryImage;

  const [firstColor] = colors || [];
  const [firstSize] = sizes || [];

  const [isColorSelected, setIsColorSelected] = useState(0);
  const [colorExtraPrice, setColorExtraPrice] = useState(0);
  const [colorName, setColorName] = useState("");
  const [sizeExtraPrice, setSizeExtraPrice] = useState(0);
  const [sizeName, setSizeName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const totalPrice =
    (Number(price) + Number(colorExtraPrice) + Number(sizeExtraPrice)) *
    Number(quantity);

  useEffect(() => {
    if (firstColor?.extraPrice) {
      setColorExtraPrice(firstColor?.extraPrice);
    }
    if (firstColor?.colorName) {
      setColorName(firstColor?.colorName);
    }
    if (firstSize?.extraPrice) {
      setSizeExtraPrice(firstSize?.extraPrice);
    }
    if (firstSize?.sizeName) {
      setSizeName(firstSize?.sizeName);
    }
  }, [
    firstColor?.extraPrice,
    firstSize?.extraPrice,
    firstColor?.colorName,
    firstColor,
    firstSize?.sizeName,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleColor = (color, index) => {
    setColorExtraPrice(Number(color.extraPrice));
    setIsColorSelected(index);
    setColorName(color.colorName);
  };
  const handleSize = (e) => {
    setSizeName(e.target.value);
  };

  useEffect(() => {
    if (sizeName) {
      const sizeCost = sizes?.find((size) => size.sizeName === sizeName);
      setSizeExtraPrice(sizeCost.extraPrice);
    }
  }, [sizes, sizeName]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product: product?.data,
        quantity,
        color: colorName,
        colorCost: colorExtraPrice,
        size: sizeName,
        sizeCost: sizeExtraPrice,
      })
    );
    dispatch(getTotals());
  };
  const handleBuyNow = () => {
    dispatch(
      addToCart({
        product: product?.data,
        quantity,
        color: colorName,
        colorCost: colorExtraPrice,
        size: sizeName,
        sizeCost: sizeExtraPrice,
      })
    );
    dispatch(getTotals());
    navigate("/checkouts");
  };

  let content = null;

  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error message={"There was and error"} />;
  }
  if (!isLoading && !isError && product?.data?._id) {
    content = (
      <>
        <PageTitle title={`${name} - Price in bangladesh`}></PageTitle>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="pb-0 md:p-5 px-5">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              stopOnHover={false}
              showThumbs={true}
              swipeable={true}
              useKeyboardArrows={true}
              showStatus={false}
              showArrows={true}
              showIndicators={true}
              emulateTouch={true}
              thumbWidth={90}
            >
              <div className="">
                <img
                  className="object-cover max-w-lg"
                  src={finalPrimaryImage}
                  alt=""
                />
              </div>
              {extraImages.map((imageUrl) => (
                <div key={imageUrl} className="">
                  <img
                    className="object-cover  max-w-lg"
                    src={`${process.env.REACT_APP_IMG_URL + imageUrl}`}
                    alt=""
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="pt-0 px-5 md:p-5 poppins">
            <h2 className="text-black text-xl lg:text-2xl font-semibold leading-relaxed">
              {name}
            </h2>

            <p className="mt-5 flex items-center text-xl">
              Price :
              <span className="font-semibold text-red-500 ml-2">
                ৳ {totalPrice ? numberWithComma(totalPrice) : ""}
              </span>
            </p>

            <div className="border-b border-gray-300 my-2 md:my-3"></div>

            {colors?.length > 0 && (
              <div>
                <p className="font-semibold text-lg mb-3">Color</p>
                {colors?.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColor(color, index)}
                    className={`mr-5 mb-5 capitalize p-1 border-2 md:p-2 px-3 md:px-4 ${
                      isColorSelected === index
                        ? "border-black"
                        : "border-slate-200"
                    }`}
                  >
                    {color.colorName}
                  </button>
                ))}
                <div className="border-b border-gray-300 my-2 md:my-3"></div>
              </div>
            )}

            {sizes?.length > 0 && (
              <div>
                <p className="font-semibold text-lg mb-3">Size</p>
                <form>
                  <select
                    name=""
                    id=""
                    className="border-2 border-black p-1 px-2 md:p-2 mb-5 cursor-pointer"
                    onChange={(e) => handleSize(e)}
                  >
                    {sizes?.map((size, index) => (
                      <option
                        key={index}
                        selected={index === 0}
                        className="pt-2"
                        value={size.sizeName}
                      >
                        {size.sizeName}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            )}

            <div className="mt-5">
              <p className="font-semibold text-lg mb-3">Quantity</p>
              <div className="flex items-center mb-10">
                <span
                  onClick={() =>
                    setQuantity(quantity === 1 ? quantity : quantity - 1)
                  }
                >
                  <AiOutlineMinus
                    className="text-4xl text-white bg-black p-1 cursor-pointer"
                    disabled
                  />
                </span>
                <span>
                  <input
                    type="text"
                    disabled
                    className="text-center border w-16 py-1"
                    defaultValue={quantity}
                    value={quantity}
                  />
                </span>
                <span onClick={() => setQuantity(quantity + 1)}>
                  <AiOutlinePlus className="text-4xl text-white bg-black p-1 cursor-pointer" />
                </span>
              </div>
              <div className="sm:flex items-center gap-3 text-center">
                <button
                  onClick={handleAddToCart}
                  className="max-w-xs w-full mb-3 sm:mb-0 border py-2 md:mr-3 bg-black text-white font-semibold"
                >
                  Add To Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="max-w-xs w-full border py-2  md:mb-0 md:ml-3 bg-black text-white font-semibold"
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="border-b border-gray-300 my-2 md:my-6 cursor-pointer"></div>
            <p className="font-semibold text-lg mb-3">Description</p>
            <p className="text-justify ">{description}</p>
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <div className="container mx-auto my-10 md:mt-16">
      {content}
      <WhySuperTech />
    </div>
  );
};

export default ProductDetails;
