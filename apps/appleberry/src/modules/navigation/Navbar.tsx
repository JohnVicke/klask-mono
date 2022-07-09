import Link from "next/link";
import React from "react";
import { ProfileAvatar } from "../../components/ProfileAvatar";
import { menuItems } from "./menuItems";

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => (
  <div className="navbar bg-netural backdrop-blur-md sticky top-0 px-2">
    <div className="flex-1">
      <Link href="/">
        <a className="btn btn-ghost">kaffeklask</a>
      </Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0 ">
        {menuItems.map(({ label, href, Icon }) => (
          <li key={label} className="hidden md:flex">
            <Link href={href}>
              <div className="flex align-center">
                <Icon />
                <p>{label}</p>
              </div>
            </Link>
          </li>
        ))}
        <div className="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="m-auto rounded-full">
              <ProfileAvatar />
            </div>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48"
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
      </ul>
    </div>
  </div>
);
