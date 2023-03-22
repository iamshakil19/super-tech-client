export default function Error({ message }) {
  return (
    <div className="flex items-center justify-center poppins">
      <div className=" bg-red-200 max-w-lg px-4 py-2 text-red-700 rounded shadow w-full">
        <span className="block text-sm">{message}</span>
      </div>
    </div>
  );
}
