import React from "react";

interface HeadingProps {
  title: string;
  description: string;
}
export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="px-8">
      <h1 className="font-bold text-black text-lg">{title}</h1>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
};
