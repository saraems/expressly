import { ChangeEventHandler, HTMLAttributes } from "react";

type TextAreaProps = {
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
} & HTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ onChange, value, ...rest }: TextAreaProps) => {
  return (
    <textarea
      className="Textarea"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};
