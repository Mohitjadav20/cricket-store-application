import Image from "next/image";

const ProductImage = ({ src, alt }) => {
  return (
    <div className="border-2 border-slate-800/15  overflow-hidden">
      {src && (
        <Image
          src={src}
          alt={alt}
          className="w-full h-[550px] object-contain"
          lazy="responsive"
        />
      )}
    </div>
  );
};

export default ProductImage;
