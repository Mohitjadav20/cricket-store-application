import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import CartIcon from "@/assets/images/cart-icon.svg";
import { ROUTES } from "@/utils";
import Link from "next/link";

const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href={ROUTES.HOME}>
          <p className="font-bold text-inherit">CRICKET STORE</p>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          <Link href={ROUTES.CART}>
            <Image src={CartIcon} width={30} height={30} alt="cart-icon" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
