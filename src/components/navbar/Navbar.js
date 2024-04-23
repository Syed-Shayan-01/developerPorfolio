import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, } from "@nextui-org/react";
import Logo from "../logo/Logo";
import Link from "next/link";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Projects",
        "about",
        "Contact"
    ];

    return (
        <Navbar className="bg-black" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white hover:text-blue-400 "
                />
                <NavbarBrand className="max-md:text-center">
                    <Logo text={'shayan'} />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link className="text-white text-[1.3rem] mx-4 hover:text-blue-500 font-semibold duration-500" href="/#about">
                        Skills
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/#Projects" className="text-white text-[1.3rem] mx-4 hover:text-blue-500 font-semibold duration-500" aria-current="page">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white text-[1.3rem] mx-4 hover:text-blue-500 font-semibold duration-500" href="/#Contact">
                        Contact us
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-black" style={{ maxHeight: "50vh" }}>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem className="uppercase mt-4 " key={`${item}-${index}`}>
                        <Link
                            href={`#${item}`}
                            className="text-white text-[1.2rem] hover:text-blue-500 duration-500 "
                        >
                            {item}
                        </Link>
                        <div className="border mt-1"></div>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

