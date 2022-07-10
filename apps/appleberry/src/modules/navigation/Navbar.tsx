import Link from "next/link";
import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ProfileAvatar } from "../../components/ProfileAvatar";
import { menuItems } from "./menuItems";
import { HamburgerIcon } from "../../icons/HamburgerIcon";

interface NavbarProps {}

export const Navbar = ({ children }: React.PropsWithChildren<NavbarProps>) => {
  return (
    <div className="drawer">
      <input id="klask-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label for="klask-drawer" className="btn btn-square btn-ghost">
              <HamburgerIcon size="md" />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link href="/">
              <a className="btn btn-ghost">kaffeklask</a>
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              {menuItems.map(({ label, href, Icon }) => (
                <li key={label} className="hidden lg:block ">
                  <Link href={href}>
                    <div className="flex align-center">
                      <Icon />
                      <p>{label}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="dropdown dropdown-end p-0">
              <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="m-auto rounded-full">
                  <ProfileAvatar />
                </div>
              </label>
              <ul
                tabindex="0"
                className="z-10 menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-48"
              >
                <li className="">
                  <a className="w-full">Profile</a>
                </li>
                <li>
                  <a className="w-full">Settings</a>
                </li>
                <li>
                  <a className="w-full">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label for="klask-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {menuItems.map(({ label, href, Icon }) => (
            <li key={label}>
              <Link href={href}>
                <div className="flex align-center">
                  <Icon />
                  <p>{label}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
