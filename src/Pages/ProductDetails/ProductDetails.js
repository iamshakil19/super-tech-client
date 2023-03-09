import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { TbCurrencyTaka } from "react-icons/tb";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { toast } from "react-hot-toast";
import WhySuperTech from "../Shared/WhySuperTech/WhySuperTech";

const ProductDetails = () => {
  const id = useParams();

  const product = {
    _id: 1,
    name: "GRID Newon Chair",
    colors: [
      { id: 1, color: "black", extraPrice: 0 },
      { id: 2, color: "red", extraPrice: 400 },
      { id: 3, color: "gold", extraPrice: 900 },
    ],
    sizes: [
      { id: 1, size: "Compact : 36”W x 24”D x 30”H", extraPrice: 0 },
      { id: 2, size: "Regular : 48”W x 24”D x 30”H", extraPrice: 2500 },
      { id: 3, size: "Executive : 60”W x 24”D x 30”H", extraPrice: 4000 },
      { id: 4, size: 'Extended : 7"W x 24”D x 30”H', extraPrice: 5000 },
    ],
    price: "1000",
    primaryImage:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
    image2:
      "https://cdn.shopify.com/s/files/1/0521/4434/1176/products/CM-F85AS-145_1080x.webp?v=1672562358",
  };

  const [isColorSelected, setIsColorSelected] = useState(1);

  const [colorExtraPrice, setColorExtraPrice] = useState(null);
  const [sizeExtraPrice, setSizeExtraPrice] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const totalPrice =
    (Number(product.price) + Number(colorExtraPrice) + Number(sizeExtraPrice)) *
    Number(quantity);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="container mx-auto my-10 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="pb-0 md:p-5 px-5">
          <Carousel
            // autoPlay={true}
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
            {/* <div>
              <img
                className="object-cover"
                src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                alt=""
              />
            </div> */}
          </Carousel>
        </div>
        <div className="pt-0 px-5 md:p-5 poppins">
          <h2 className="text-black text-3xl font-semibold ">{product.name}</h2>

          <p className="mt-5 flex items-center text-xl">
            {" "}
            Price :{" "}
            <span className="font-semibold text-red-500 ml-2">
              {" "}
              {totalPrice}{" "}
            </span>{" "}
            <TbCurrencyTaka className="text-red-500  text-2xl" />
          </p>

          <div className="border-b border-gray-300 my-2 md:my-3"></div>

          {product.colors && (
            <div>
              <p className="font-semibold text-lg mb-3">Color</p>
              {product.colors.map((color) => (
                <button
                  onClick={() =>
                    setColorExtraPrice(Number(color.extraPrice))(
                      setIsColorSelected(color.id)
                    )
                  }
                  className={`mr-5 mb-5 capitalize p-1 border-2 md:p-2 px-3 md:px-4 ${
                    isColorSelected === color.id
                      ? "border-black"
                      : "border-slate-200"
                  }`}
                >
                  {color.color}
                </button>
              ))}
              <div className="border-b border-gray-300 my-2 md:my-3"></div>
            </div>
          )}

          {product.sizes && (
            <div>
              <p className="font-semibold text-lg mb-3">Size</p>
              <form>
                <select
                  name=""
                  id=""
                  className="border-2 border-black p-1 px-2 md:p-2 mb-5 cursor-pointer"
                  onChange={(e) => setSizeExtraPrice(e.target.value)}
                >
                  {product.sizes.map((size) => (
                    <option
                      selected={size.id === 1}
                      className="pt-2"
                      value={size.extraPrice}
                    >
                      {size.size}
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
              <button className="max-w-xs w-full border py-2 mb-5 md:mb-0 md:mr-3 bg-black text-white font-semibold">
                Buy Now
              </button>
              <button className="max-w-xs w-full border py-2 md:ml-3 bg-black text-white font-semibold">
                Add To Cart
              </button>
            </div>
          </div>
          <div className="border-b border-gray-300 my-2 md:my-6 cursor-pointer"></div>
          <p className="font-semibold text-lg mb-3">Description</p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            itaque voluptates cupiditate commodi eos, quae repellat tenetur illo
            velit vitae fugiat natus assumenda consequatur sed explicabo
            provident ut inventore maiores quidem facere dignissimos nam
            placeat? Labore, earum optio? Id, temporibus libero maiores modi
            animi blanditiis debitis pariatur consequatur natus quae rerum
            repudiandae ipsam corporis hic aliquam deserunt quis! Magnam
            reprehenderit eaque adipisci. Molestiae quas quia at sunt, velit
            modi quisquam, pariatur quae ullam vero quasi laboriosam saepe sint
            magnam quibusdam nemo quam laudantium dolores sequi iusto.
            Praesentium tenetur deleniti quidem deserunt iste consectetur,
            commodi aut enim fuga accusantium. Excepturi a quas nobis, quasi
            harum placeat illo deserunt fugiat voluptate quo eaque non
            perspiciatis! Quidem voluptas odit maxime inventore aut labore iure
            quas illo nostrum amet ipsam, soluta ut, recusandae ab cupiditate
            consequuntur reiciendis reprehenderit eveniet ratione eaque? Et ex
            natus iusto harum explicabo quaerat nisi accusantium veniam,
            exercitationem dolores sint cupiditate sequi facilis dolor quo odit
            eum! Neque minus accusamus fugiat beatae laudantium laboriosam hic
            officiis, accusantium ab blanditiis doloribus, atque error totam!
            Dignissimos nulla sit sint deleniti recusandae velit voluptatum
            soluta accusamus quas laborum veritatis nemo pariatur ab provident
            dolores ut nesciunt, facere repudiandae ratione error aliquid.
            Aliquid, qui.
          </p>
        </div>
      </div>
      <WhySuperTech />
    </div>
  );
};

export default ProductDetails;
