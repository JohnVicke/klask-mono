import { useRouter } from "next/router";
import React from "react";
import { GroupIcon } from "../../../icons/GroupIcon";
import { HomeIcon } from "../../../icons/HomeIcon";
import { ListOrderedIcon } from "../../../icons/ListOrderedIcon";
import { ProfileIcon } from "../../../icons/ProfileIcon";
import { QrCodeScanIcon } from "../../../icons/QrCodeScanIcon";
import { BottomNavItem } from "./BottomNavItem";

export const BottomNav = () => {
  const router = useRouter();
  const goTo = (path: string) => router.push(path);

  return (
    <div className="w-full">
      <div className="z-10 absolute bottom-0 left-0 flex w-[90%] ml-[5%] justify-between items-center h-[60px]">
        <div className="flex flex-1 items-center justify-around">
          <BottomNavItem
            onClick={() => goTo("/")}
            className="absolute left-1 mt-2 cursor-pointer"
            icon={<HomeIcon size="md" />}
          />
          <BottomNavItem
            onClick={() => goTo("/social")}
            className="absolute"
            icon={<GroupIcon size="md" />}
          />
        </div>
        <BottomNavItem
          onClick={() => goTo("/game/join-game")}
          className="rotate-45 mt-[-60px] bg-neutral border-base-100 border-[.5rem] rounded-[1rem] w-[60px] h-[60px] flex justify-center items-center"
          icon={<QrCodeScanIcon className="rotate-[135deg]" size="lg" />}
        />
        <div className="flex flex-1 items-center justify-around">
          <BottomNavItem
            onClick={() => goTo("/leaderboard/1")}
            className="absolute"
            icon={
              <ListOrderedIcon className="text-white icon-glow" size="md" />
            }
          />
          <BottomNavItem
            className="absolute right-1 mt-2"
            icon={<ProfileIcon size="md" />}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-neutral h-[60px] navbar-clip" />
    </div>
  );
};
