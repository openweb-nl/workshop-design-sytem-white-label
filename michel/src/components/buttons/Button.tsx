import React, {FC, HTMLAttributes} from "react";
import "./Button.scss"

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
                                                         children,
                                                         className,
                                                         ...props
                                                       }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
}

export default Button;
