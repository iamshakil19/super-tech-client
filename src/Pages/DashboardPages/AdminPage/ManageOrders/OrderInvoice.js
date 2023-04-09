import moment from "moment";
import React from "react";
import { useGetInvoiceNoQuery } from "../../../../features/orders/ordersApi";
import converter from "number-to-words";
const OrderInvoice = ({ componentRef, order }) => {
  const { data: invoiceNoData } = useGetInvoiceNoQuery();
  const { invoiceNo } = invoiceNoData?.data || {};
  console.log(invoiceNo);
  const {
    cart,
    shippingCost,
    subTotal,
    totalPrice,
    createdAt,
    name,
    division,
    streetAddress,
  } = order || {};
  return (
    <div
      className="p-10 container mx-auto poppins text-black"
      ref={componentRef}
    >
      <div>
        <div className="py-16"></div>
        <section>
          <p className="text-center font-bold underline text-lg">Bill</p>
          <div className="grid grid-cols-2 mt-5">
            <div>
              <p className="text-sm leading-relaxed">
                Date : <span>{moment(createdAt).format("lll")}</span>
              </p>
              <p className="text-sm leading-relaxed">To</p>
              <p className="text-sm leading-relaxed">
                <span>{name}</span>
              </p>
              <p className="text-sm leading-relaxed">
                City : <span className="capitalize">{division}</span>
              </p>
              <p className="text-sm max-w-lg leading-relaxed">
                {streetAddress}
              </p>
            </div>
            <div>
              <p>
                Invoice No : <span>STF/Bill</span> - <span>{invoiceNo}</span> -
                <span>{moment(new Date()).format("ll")}</span>
              </p>
            </div>
          </div>
        </section>
        <section>
          <table className="w-full border border-gray-400 mt-5">
            <thead>
              <tr>
                <th class="py-2 border border-gray-400 px-2">SL</th>
                <th class="py-2 border border-gray-400 px-2 whitespace-nowrap">
                  Item Name
                </th>
                <th class="py-2 border border-gray-400 px-2">Qty</th>
                <th class="py-2 border border-gray-400 px-2 whitespace-nowrap">
                  Unit Rate
                </th>
                <th class="py-2 border border-gray-400 px-2">Dsc</th>
                <th class="py-2 border border-gray-400 px-2">Total</th>
              </tr>
            </thead>
            <tbody className="border border-gray-400">
              {cart?.map((product) => (
                <tr class="">
                  <td class=" border border-gray-400 py-2 text-sm px-2 text-center">
                    1
                  </td>
                  <td class=" border border-gray-400 py-2 text-sm px-2 max-w-lg">
                    <p className="font-semibold">{product.name}</p>
                    {product.color && (
                      <p>
                        <span>Color : {product.color}</span>
                        <span className="ml-4">
                          Color Cost :{" "}
                          <span className="font-medium">
                            {product.colorCost}
                          </span>
                        </span>
                      </p>
                    )}
                    {product.size && (
                      <p>
                        <span>Size : {product.size}</span>
                        <span className="ml-4">
                          Size Cost :{" "}
                          <span className="font-medium">
                            {product.sizeCost}
                          </span>
                        </span>
                      </p>
                    )}
                  </td>
                  <td class=" border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                    {product.quantity}
                  </td>
                  <td class=" border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                    {product.price}
                  </td>

                  <td class=" border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                    {product.discount > 0 ? (
                      <span className="whitespace-nowrap">
                        -{product.discount}%
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </td>

                  <td class=" border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                    {product.quantity * product.price -
                      (product.discount / 100) *
                        (product.quantity * product.price)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section className="w-full grid grid-cols-2 mt-3">
          <div></div>
          <div>
            <div className="w-full flex justify-end">
              <div className="max-w-xs font-medium">
                <span className="mr-5">Sub Total : </span>
                <span>{subTotal}</span>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <div className="max-w-xs font-medium">
                <span className="mr-5">Shipping Cost : </span>
                <span>{shippingCost}</span>
              </div>
            </div>
            <div className="w-full flex justify-end mt-3">
              <div className="max-w-xs font-bold">
                <span className="mr-5">Total Amount : </span>
                <span>{totalPrice}</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p className="text-sm">
            In Word :{" "}
            <span className="font-semibold">
              {converter.toWords(totalPrice)}
            </span>
          </p>
        </section>
        <section className="mt-32">
          <p className="flex justify-around items-center">
            <span className="border-t border-black">Receiver's Signature</span>
            <span className="border-t border-black">Checked By</span>
          </p>
        </section>
      </div>
      <div className="py-10"></div>
    </div>
  );
};

export default OrderInvoice;
