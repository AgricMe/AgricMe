import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  ModalProps?: HTMLAttributes<HTMLDivElement>;
  width?: number;
}

const ModalOverlay = ({ width, ModalProps, children, ...props }: Props) => {
  return (
    <section
      {...props}
      style={{ background: "rgba(0, 0, 0, .65)" }}
      className={`fixed top-0 left-0 z-[6] flex items-center justify-center h-screen w-screen ${props.className}`}
    >
      <div
        {...ModalProps}
        style={{ width: "95vw", maxWidth: width ?? 500 }}
        className={`bg-[#eff6f1] p-4 md:p-8 rounded-md  ${ModalProps?.className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default ModalOverlay;
