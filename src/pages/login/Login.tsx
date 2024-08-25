import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/Input/Input';
import { Label } from '../../components/ui/Label/Label';
import { Button } from '../../components/ui/Button/Button';
import { Link } from '../../components/ui/Link/Link';
const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="IAFact"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {'Ingresa en tu cuenta'}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <Label htmlFor="user">{'Usuario:'}</Label>
              <div className="mt-2">
                <Input name="user" type="text" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{'Clave:'}</Label>
                <div className="text-sm">
                  <Link
                    onClick={() => {
                      navigate('/forgotPassword');
                    }}
                  >
                    {'Olvidaste tu clave?'}
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <Input name="password" type="password" />
              </div>
            </div>

            <div>
              <Button>{'Login'}</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {'Ya tienes cuenta? '}
            <Link
              onClick={() => {
                navigate('/register');
              }}
            >
              {'registra tu cuenta'}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
