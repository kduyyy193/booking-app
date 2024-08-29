import React from "react";
import classNames from "classnames";

interface IProps extends React.ComponentPropsWithoutRef<"label"> {
    required: boolean;
}

const Label: React.FC<IProps> = ({ htmlFor, title, required = true }) => {
    return (
        <div className="pb-1.5">
            <label
                className={classNames("text-3.5 leading-4.75 font-semibold text-light-dark", {
                    "after:content-['*'] after:text-error": required,
                })}
                htmlFor={htmlFor}
                title={title}
            >
                {title}
            </label>
        </div>
    );
};

export default Label;
