import Image from "next/image";

const CartItem = ({ item }) => {
  return (
    <div className="flex mt-2 flex-col md:flex-row items-start border border-gray-200 p-4 rounded-lg justify-between ">
      <div className="md:mr-4 mb-4 md:mb-0 flex-shrink-0">
        <Image
          src={item.imageURL.src}
          width={250}
          height={250}
          alt={item.name}
          priority
        />
      </div>
      <div className="w-full md:w-[50%]">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p>Size: {item.size}</p>
        <p className="text-gray-500">${item.price}</p>
        <p className="text-gray-600 break-words">{item.shortDescription}</p>
      </div>
    </div>
  );
};

export default CartItem;
