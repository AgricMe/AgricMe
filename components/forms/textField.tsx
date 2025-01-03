import React, {
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactElement,
} from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  LabelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  InputProps?: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
  helperText?: string;
  helperTextProps?: HTMLAttributes<HTMLHeadingElement>;
  multiline?: boolean;
  inputSuffix?: ReactElement;
}

export default function TextField({
  InputProps,
  label,
  helperText,
  helperTextProps,
  multiline,
  LabelProps,
  inputSuffix,
  ...props
}: Props) {
  return (
    <div {...props} className={`flex gap-1 flex-col w-full ${props.className}`}>
      {label && (
        <label
          {...LabelProps}
          htmlFor={InputProps?.id}
          className={`text-[.9rem] ${LabelProps?.className}`}
        >
          {label}
        </label>
      )}

      <div className="flex items-center gap-2">
        {multiline ? (
          <textarea
            {...InputProps}
            className={`w-full h-[80px] md:h-[150px] p-2 outline-none text-[#444] text-[.8rem] dark:bg-white rounded-md border-[1.5px] resize-none ${InputProps?.className}`}
          />
        ) : (
          <input
            {...InputProps}
            className={`w-full p-2 outline-none text-[#444] text-[.8rem] dark:bg-white rounded-md border-[1.5px] focus:border-[#7EB693] ${InputProps?.className}`}
          />
        )}
        {inputSuffix}
      </div>

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
