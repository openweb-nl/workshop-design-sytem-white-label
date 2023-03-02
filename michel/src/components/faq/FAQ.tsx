import React, {FC, HTMLAttributes} from "react";
import "./FAQ.scss"

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({
                                                         children,
                                                         className,
                                                         ...props
                                                       }) => {
  return (
    <details>
      <summary>{props.title}</summary>
      {children}
    </details>
  );
}

export default Button;
