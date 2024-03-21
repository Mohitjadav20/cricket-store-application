const AvailableSizes = ({ sizes, selectedSize, handleSizeClick }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mt-4 mb-2">Available Sizes:</h2>
      <ul className="mt-4 mb-2 flex">
        {sizes.map((size) => (
          <li
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`mr-2 mb-2 w-[calc(50% - 0.75rem)] sm:w-auto border-2 border-slate-800/15 px-3 py-1 text-gray-500 cursor-pointer ${
              selectedSize === size ? "bg-blue-100 text-blue-600" : ""
            }`}
          >
            {size}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AvailableSizes;
