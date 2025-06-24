import { ErrorMessage as HookFormErrorMessage } from '@hookform/error-message';
import { type FieldErrors, type FieldValues } from 'react-hook-form';

interface ErrorMessageProps {
  errors: FieldErrors<FieldValues>;
  name: string;
}

export default function ErrorMessage({ errors, name }: ErrorMessageProps) {
  return (
    <HookFormErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="text-red-400 text-xs font-bold">{message}</p>}
    />
  );
}
