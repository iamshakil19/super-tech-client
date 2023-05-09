import moment from "moment";
import React from "react";
import { useGetInvoiceNoQuery } from "../../../../features/orders/ordersApi";
import converter from "number-to-words";
import numberWithComma from "../../../../Utils/numberWithComa";
const OrderInvoice = ({ componentRef, order }) => {
  const { data: invoiceNoData } = useGetInvoiceNoQuery();
  const { invoiceNo } = invoiceNoData?.data || {};
  const {
    cart,
    shippingCost,
    subTotal,
    totalPrice,
    createdAt,
    name,
    division,
    streetAddress,
    advanceAmount,
  } = order || {};

  return (
    <div
      className="p-5 container mx-auto poppins text-black"
      ref={componentRef}
    >
      <div>
        <section>
          <p className="text-center font-bold underline text-lg">Bill</p>
          <div className="grid grid-cols-2 mt-5">
            <div>
              <p className="text-sm leading-relaxed">
                Date : <span>{moment(createdAt).format("lll")}</span>
              </p>
              <p className="text-sm leading-relaxed">To</p>
              <p className="text-sm leading-relaxed capitalize">{name}</p>
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
              {cart?.map((product, i) => (
                <tr class="">
                  <td class=" border border-gray-400 py-2 text-sm px-2 text-center">
                    {i + 1}
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
                    {product.price && numberWithComma(product.price)}.00
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
                    {numberWithComma(
                      product.quantity * product.price -
                        (product.discount / 100) *
                          (product.quantity * product.price)
                    )}
                    .00
                  </td>
                </tr>
              ))}
              <tr className="border border-gray-400">
                <td></td>
                <td></td>
                <td></td>
                <td className=" py-2 text-sm px-2  text-center font-medium whitespace-nowrap">
                  Shipping Cost
                </td>
                <td></td>
                <td className="border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                  {shippingCost}.00
                </td>
              </tr>
              <tr className="border border-gray-400">
                <td></td>
                <td></td>
                <td></td>
                <td className=" py-2 text-sm px-2  text-center font-medium">
                  Total Amount
                </td>
                <td></td>
                <td className="border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                  {totalPrice && numberWithComma(totalPrice)}.00
                </td>
              </tr>
              <tr className="border border-gray-400">
                <td></td>
                <td></td>
                <td></td>
                <td className=" py-2 text-sm px-2  text-center font-medium">
                  Advance
                </td>
                <td></td>
                <td className="border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                  {advanceAmount && numberWithComma(advanceAmount)}.00
                </td>
              </tr>
              <tr className="border border-gray-400">
                <td></td>
                <td></td>
                <td></td>
                <td className=" py-2 text-sm px-2  text-center font-medium">
                  Due Amount
                </td>
                <td></td>
                <td className="border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                  {totalPrice && numberWithComma(totalPrice - advanceAmount)}.00
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <p className="text-sm mt-10">
            In Word :{" "}
            <span className="font-semibold">
              {converter.toWords(totalPrice - advanceAmount)}
            </span>
          </p>
        </section>
        <section className="mt-32">
          <p className="flex justify-around items-center">
            <span className="border-t border-black">Receiver's Signature</span>
            <span className="border-t border-black">Authorized By</span>
          </p>
        </section>
      </div>
      <style>
        {`@media print {
          @page {
            size: auto;
            margin-top: 130px;
            margin-bottom: 96px;
          }
        }`}
      </style>
    </div>
  );
};

export default OrderInvoice;
