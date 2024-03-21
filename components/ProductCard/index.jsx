import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { ROUTES } from "@/utils";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  //handle navigation
  const router = useRouter();
  return (
    //Used nextui component for make product card
    <Card
      shadow="sm"
      isPressable
      onPress={() => router.push(ROUTES.PRODUCT_DETAIL(product?.id))}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width={100}
          height={150}
          alt={product.name}
          className="object-cover"
          src={product.imageURL?.src}
          layout="responsive"
          priority
        />
      </CardBody>
      <CardFooter className="flex-col">
        <div className="w-full px-0 md:px-2 text-small flex justify-between">
          <b>{product.name}</b>
          <p className="text-default-500">${product.price}</p>
        </div>
        <h4 className="text-default-500 text-left px-2">
          {product?.shortDescription}
        </h4>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
