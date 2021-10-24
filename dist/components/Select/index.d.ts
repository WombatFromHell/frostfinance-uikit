import React from "react";
export interface SelectProps {
    defaultOption?: OptionProps;
    options: OptionProps[];
    onChange?: (option: OptionProps) => void;
}
export interface OptionProps {
    label: string;
    value: any;
}
export declare const Select: React.FunctionComponent<SelectProps>;
