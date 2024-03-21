const ProductDetails = ({ description, price }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Detailed Description:</h2>
      <p className="mb-4">{description}</p>
      <p className="text-lg font-semibold mt-4 mb-2">
        Price:
        <span className="text-base text-gray-500"> ${price}</span>
      </p>
    </div>
  );
};

export default ProductDetails;
