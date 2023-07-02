import { FC } from 'react';

interface Props {
  errorMessage: string | undefined;
}

export const ErrorMessage: FC<Props> = ({ errorMessage }) => {
  return (
    <p className="text-sm text-red-400 h-5">
      <b>{errorMessage}</b>
    </p>
  );
};
