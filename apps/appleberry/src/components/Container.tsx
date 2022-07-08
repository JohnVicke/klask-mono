import React from "react";

interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({
  children,
}: React.PropsWithChildren<ContainerProps>) => (
  <div className="container px-4 py-2">{children}</div>
);
