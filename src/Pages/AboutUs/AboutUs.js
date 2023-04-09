import React from "react";
const Layout = () => {
  return (
    <div className="p-5 container mx-auto poppins">
      <div>
        <div className="py-16"></div>
        <section>
          <p className="text-center font-bold underline">Quotation</p>
          <p className="text-sm leading-relaxed">
            Date : <span>16-2-2023</span>
          </p>
          <p className="text-sm leading-relaxed">
            To : <span>Shakil Ahmed</span>
          </p>
          <p className="text-sm leading-relaxed">
            City : <span>Dhaka</span>
          </p>
          <p className="text-sm max-w-lg leading-relaxed">
            Plot 31/B, Avenue 05, Road 15/1, Block C, Mirpur - 11, Dhaka-1216
          </p>
        </section>
        <section>
          <table className="w-full border border-gray-400 mt-5">
            <thead>
              <tr>
                <th class="py-2 border border-gray-400 px-2">SL</th>
                <th class="py-2 border border-gray-400 px-2 whitespace-nowrap">
                  Item Name
                </th>
                <th class="py-2 border border-gray-400 px-2">Quantity</th>
                <th class="py-2 border border-gray-400 px-2 whitespace-nowrap">
                  Unit Price
                </th>
                <th class="py-2 border border-gray-400 px-2">Total</th>
              </tr>
            </thead>
            <tbody className="border border-gray-400">
              <tr class="">
                <td class=" border border-gray-400 py-2 text-sm px-2 text-center">
                  1
                </td>
                <td class=" border border-gray-400 py-2 text-sm px-2 max-w-lg">
                  <p className="font-semibold">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Totam, odio
                  </p>
                  <p>
                    <span>Color : Black</span>
                    <span className="ml-4">
                      Color Cost : <span className="font-medium">400</span>
                    </span>
                  </p>
                  <p>
                    <span>Size : L4'-0" x W 1'-4" x H 7'-8"</span>
                    <span className="ml-4">
                      Size Cost : <span className="font-medium">700</span>
                    </span>
                  </p>
                </td>
                <td class=" border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                  3
                </td>
                <td class=" border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                  50
                </td>
                <td class=" border border-gray-400 py-2 text-sm px-2  text-center font-medium">
                  100
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="w-full grid grid-cols-2 mt-3">
          <div></div>
          <div>
            <div className="w-full flex justify-end">
              <div className="max-w-xs font-bold">
                <span className="mr-5">Total Amount : </span>
                <span>3,150</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p className="text-sm">
            In Word :{" "}
            <span className="font-semibold">
              Two Lac Eighty One Thousand Six Hundred Taka Only.
            </span>
          </p>
        </section>
      </div>
      <div className="py-10"></div>
    </div>
  );
};

export default Layout;
