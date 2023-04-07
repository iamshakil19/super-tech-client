import React from "react";

const Sidebar = () => {
  return (
    <div className="w-56 bg-gray-800 h-full fixed top-0 left-0 overflow-y-auto">
      {/* Sidebar content goes here */}
    </div>
  );
};

const Table = () => {
  return (
    <div className="ml-56 p-4 w-full">
      <table className="w-full overflow-x-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Column 1</th>
            <th className="border px-4 py-2">Column 2</th>
            <th className="border px-4 py-2">Column 3</th>
            <th className="border px-4 py-2">Column 4</th>
            <th className="border px-4 py-2">Column 5</th>
            <th className="border px-4 py-2">Column 6</th>
            <th className="border px-4 py-2">Column 7</th>
            <th className="border px-4 py-2">Column 8</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 whitespace-nowrap">Data 1 df df df d</td>
            <td className="border px-4 py-2">Data 2</td>
            <td className="border px-4 py-2 whitespace-nowrap">Data 3 df dfdf dfdf ddfd fdf dfd</td>
            <td className="border px-4 py-2">Data 3</td>
            <td className="border px-4 py-2">Data 3</td>
            <td className="border px-4 py-2">Data 3</td>
            <td className="border px-4 py-2">Data 3</td>
            <td className="border px-4 py-2">Data 3</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Data 4</td>
            <td className="border px-4 py-2">Data 5</td>
            <td className="border px-4 py-2">Data 6</td>
            <td className="border px-4 py-2">Data 6</td>
            <td className="border px-4 py-2">Data 6</td>
            <td className="border px-4 py-2">Data 6</td>
            <td className="border px-4 py-2">Data 6</td>
            <td className="border px-4 py-2">Data 6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Table />
    </div>
  );
};

export default Layout;
