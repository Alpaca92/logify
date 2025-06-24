'use client';

import Input from '@/src/components/Input';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/src/components/Button';
import Link from 'next/link';
import { AppRoutes } from '@/src/constrants/routes';

const schema = z.object({
  email: z.string().email('Please follow the email format.'),
  password: z.string().min(6, 'The password must be at least 6 characters long.'),
});

export default function SignUp() {
  const formInstance = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema), mode: 'onBlur' });
  const { handleSubmit } = formInstance;

  const onSubmit = (data: unknown) => {
    console.log('data: ', data);
  };

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="w-[40%] border-1 rounded-lg px-4 py-6">
        <p className="text-center text-3xl font-bold">Sign up</p>
        <form
          className="flex flex-col gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormProvider {...formInstance}>
            <Input
              id="email"
              placeholder="user@example.com"
              label="Email"
              type="email"
            />
            <Input
              id="password"
              placeholder="******"
              label="Password"
              type="password"
            />
          </FormProvider>
          <Button
            className="mt-2"
            bg="blue"
            type="submit"
          >
            Sign up
          </Button>
        </form>
        <div className="text-sm text-[#8C8D8BFF] text-center mt-6">
          <p>
            <span>Don't have an account?</span>
            <Link
              className="underline ml-2"
              href={AppRoutes.SIGN_IN}
            >
              Sign in
            </Link>
          </p>
          <p className="mt-4">
            <span>By signing up, you agree to our </span>
            <Link
              className="underline"
              href={AppRoutes.TOS}
            >
              Terms of Service
            </Link>
            <span> and </span>
            <Link
              className="underline"
              href={AppRoutes.PP}
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
