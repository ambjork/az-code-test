import React, {ChangeEventHandler} from "react";

type Props = {
  label: string;
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler;
  className?: string;
  max?: number;
  pattern?: string;
};

const Inputfield: React.FC<Props> = ({
  label,
  value,
  placeholder,
  className,
  onChange,
  max,
}) => {
  const optionalInputProps = {
    max: max,
  }

  function getField() {
        return (
          <input
            type="text"
            className={`font-ubuntu text-body-small text-black border block w-full ${className?.trim()} p-2.5`}
            onChange={onChange}
            placeholder={placeholder}
            {...optionalInputProps}
            data-testid="inputfield"
          />
        );
    }

  return (
    <div className={"flex flex-row items-baseline"}>
      <label htmlFor={value} className="font-public-sans-bold text-h6 mr-2">
        {label}
      </label>
      {getField()}
    </div>
  );
};
export default Inputfield;
