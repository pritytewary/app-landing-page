"use client";

import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Section } from "../layout";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";

export type NavbarProps = {
  links: {
    text: string;
    href: string;
  }[];
  logoUri: string;
  button: {
    text: string;
    link: string;
  };
};

export default function Navbar({ links, logoUri, button }: NavbarProps) {
  const [isMobileMenuOpen, setIsmobileMenuOpen] = useState(false);

  return (
    <Section className="flex justify-between items-center py-4">
      <div className="flex gap-14 items-center">
        <img src={logoUri} alt="" />

        <div className="lg:flex gap-6 hidden">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="font-semibold">
              {link.text}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden lg:block">
        <Link
          href={button.link}
          className={cn(
            buttonVariants({
              size: "lg",
            }),
            "uppercase"
          )}
        >
          {button.text}
        </Link>
      </div>

      <Popover open={isMobileMenuOpen} onOpenChange={setIsmobileMenuOpen}>
        <PopoverTrigger asChild>
          <Button size="icon" variant="outline" className="flex lg:hidden">
            {isMobileMenuOpen ? (
              <IoIosClose className="h-6 w-6" />
            ) : (
              <IoIosMenu className="h-6 w-6" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-content-available-width)] space-y-6">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="font-semibold w-full p-2"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <Link
            href={button.link}
            className={cn(buttonVariants({}), "w-full uppercase")}
          >
            {button.text}
          </Link>
        </PopoverContent>
      </Popover>
    </Section>
  );
}
