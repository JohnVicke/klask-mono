import React from "react";

interface TestProps {
  name: string;
}

export const Test: React.FC<TestProps> = ({ name }) => <div>{name}</div>;
