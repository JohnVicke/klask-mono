import React from "react";

interface BottomNavItemProps {
  icon: JSX.Element;
  className?: string;
  onClick?: () => void;
}

export const BottomNavItem = ({
  icon,
  onClick,
  className,
}: BottomNavItemProps) => {
  return (
    <div onClick={onClick} className={className}>
      {icon}
    </div>
  );
};
