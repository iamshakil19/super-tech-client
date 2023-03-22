import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-hot-toast";
import WhySuperTech from "../Shared/WhySuperTech/WhySuperTech";
import { useGetProductQuery } from "../../features/products/productsApi";
import Loading from "../Shared/Loading/Loading";
import Error from "../Shared/Error/Error";

const ProductDetails = () => {
  const { id } = useParams();

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
  } = product?.data || {};

  console.log(colors);
  console.log(colors);
  const [firstColor] = colors || [];
  const [firstSize] = colors || [];
  console.log(firstColor?.extraPrice);
  const [isColorSelected, setIsColorSelected] = useState(0);
  const [colorExtraPrice, setColorExtraPrice] = useState(0);
  const [sizeExtraPrice, setSizeExtraPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const totalPrice =
    (Number(price) + Number(colorExtraPrice) + Number(sizeExtraPrice)) *
    Number(quantity);
  useEffect(() => {
    setColorExtraPrice(firstColor?.extraPrice);
    setSizeExtraPrice(firstSize?.extraPrice)
  }, [firstColor?.extraPrice, firstSize?.extraPrice]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="pb-0 md:p-5 px-5">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              // stopOnHover={false}
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
                  className="object-cover h-auto"
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="object-cover h-auto"
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="object-cover h-auto"
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="object-cover h-auto"
                  src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </div>
            </Carousel>
          </div>
          <div className="pt-0 px-5 md:p-5 poppins">
            <h2 className="text-black text-3xl font-semibold ">{name}</h2>

            <p className="mt-5 flex items-center text-xl">
              Price :
              <span className="font-semibold text-red-500 ml-2">
                ৳ {totalPrice}
              </span>
            </p>

            <div className="border-b border-gray-300 my-2 md:my-3"></div>

            {colors?.length > 0 && (
              <div>
                <p className="font-semibold text-lg mb-3">Color</p>
                {colors?.map((color, index) => (
                  <button
                    onClick={() =>
                      setColorExtraPrice(Number(color.extraPrice))(
                        setIsColorSelected(index)
                      )
                    }
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
                    onChange={(e) => setSizeExtraPrice(e.target.value)}
                  >
                    {sizes?.map((size, index) => (
                      <option
                        selected={index === 0}
                        className="pt-2"
                        value={size.extraPrice}
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
              <div className="md:flex items-center">
                <button className="max-w-xs w-full border py-2 md:mr-3 bg-black text-white font-semibold">
                  Add To Cart
                </button>
                <button className="max-w-xs w-full border py-2 mb-5 md:mb-0 md:ml-3 bg-black text-white font-semibold">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="border-b border-gray-300 my-2 md:my-6 cursor-pointer"></div>
            <p className="font-semibold text-lg mb-3">Description</p>
            <p className="text-justify">{description}</p>
          </div>
        </div>
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
