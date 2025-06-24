import { type InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export default function Input({ id, placeholder, label, type }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        className="block"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="border border-[#EBEBEAFF] w-full rounded-lg placeholder-[#C2C3C2FF] p-3"
        id={id}
        placeholder={placeholder}
        type={type}
        {...register(id ?? 'anonymous')}
      />
      <ErrorMessage
        errors={errors}
        name={id}
      />
    </div>
  );
}
