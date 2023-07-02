import { FC } from 'react';
import {
  FieldValues,
  UseFormRegister
} from 'react-hook-form';

import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

interface Props {
  name: string;
  placeholder?: string;
  type?: string;
  errors: FieldValues;
  register: UseFormRegister<any>;
  className?: string;
}

export const FormInput: FC<Props> = ({
  register,
  name,
  errors,
  placeholder,
  type,
  className
}: Props) => {
  return (
    <div className="flex flex-col">
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
      <ErrorMessage errorMessage={errors[name]?.message} />
    </div>
  );
};
