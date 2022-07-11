import Link from "next/link";
import React from "react";
import { HomeIcon, HamburgerIcon, LoginIcon, AddUserIcon } from "../../icons";
import { ProfileAvatar } from "../../components/ProfileAvatar";
import { menuItems } from "./menuItems";
import { LoginModal } from "../auth/LoginModule";

interface NavbarProps {}

export const Navbar = ({ children }: React.PropsWithChildren<NavbarProps>) => {
  const [loginModalOpen, setLoginModalOpen] = React.useState(false);
  const closeLoginModal = () => setLoginModalOpen(false);

  return (
    <div className="drawer">
      <input id="klask-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="klask-drawer" className="btn btn-square btn-ghost">
              <HamburgerIcon size="md" />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link href="/">
              <button type="button" className="btn btn-ghost">
                <HomeIcon className="pr-2" />
                kaffeklask
              </button>
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
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="m-auto rounded-full">
                  <ProfileAvatar />
                </div>
              </label>
              <ul className="z-10 menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-md w-48">
                <li className="">
                  <button
                    type="button"
                    onClick={() => setLoginModalOpen(true)}
                    className="w-full"
                  >
                    <LoginIcon />
                    Log in
                  </button>
                </li>
                <li>
                  <button type="button" className="w-full">
                    <AddUserIcon />
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="klask-drawer" className="drawer-overlay" />
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
      <LoginModal open={loginModalOpen} close={closeLoginModal} />
    </div>
  );
};
