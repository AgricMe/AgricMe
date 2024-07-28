import React, { ReactElement, HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactElement | ReactElement[];
  leftSide?: ReactElement | ReactElement[];
  rightSide?: ReactElement | ReactElement[];
}

const DashboardInfoContainer = ({
  children,
  leftSide,
  rightSide,
  ...props
}: Props) => {
  return (
    <div
      {...props}
      className={`w-full flex flex-col md:flex-row justify-between items-start gap-8 mt-8 ${props.className}`}
    >
      <div className="w-full md:w-[54%] min-h-[336px] bg-white px-3 md:px-6 py-5 shadow-md rounded-xl">
        {leftSide}
      </div>

      <div className="w-full md:w-[46%] min-h-[336px] bg-white px-3 md:px-5 py-6 shadow-md rounded-xl">
        {rightSide}
      </div>
    </div>
  );
};

export default DashboardInfoContainer;
