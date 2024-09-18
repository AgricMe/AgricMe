import Image from "next/image";
import React, {
  HTMLAttributes,
  LabelHTMLAttributes,
  ReactElement,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactElement | ReactElement[];
  label?: string;
  LabelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  ref?: React.LegacyRef<HTMLSelectElement>;
  helperText?: string;
  helperTextProps?: HTMLAttributes<HTMLHeadingElement>;
  flex?: boolean;
}

export default function SelectField({
  children,
  className,
  helperText,
  helperTextProps,
  label,
  LabelProps,
  flex,
  ...props
}: Props) {
  return (
    <div className={`flex gap-1 ${flex ? "flex-row" : "flex-col"} w-full`}>
      {label && (
        <label
          {...LabelProps}
          className={`text-[.9rem] ${LabelProps?.className}`}
        >
          {label}
        </label>
      )}
      <select
        {...props}
        className={`w-full p-2 outline-none text-[#444] text-[.8rem] rounded-md border-[1.5px] ${className}`}
      >
        {children}
      </select>

      {helperText && (
        <p
          {...helperTextProps}
          className={`pl-2 text-red-500 text-[.8rem] ${helperTextProps?.className}`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
