import React from "react";

interface MainLayoutProps {
  name: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ name }) => (
  <div>{name}</div>
);
