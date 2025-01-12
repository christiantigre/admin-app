import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/Input/Input';
import { Label } from '../../components/ui/Label/Label';
import { Button } from '../../components/ui/Button/Button';
import { Link } from '../../components/ui/Link/Link';
import { RoutesModulo } from '../../enum/enum';
import { loginService } from '../../services/login/login.services';

// Definir tipos para los valores de login
interface LoginRequest {
  user: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  // Estado para almacenar los valores de los inputs
  const [credentials, setCredentials] = useState<LoginRequest>({
    user: '',
    password: '',
  });

  // Función de callback para manejar el login
  const handleLogin = async () => {
    try {
      // Aquí puedes agregar tu lógica para enviar los datos a la API, por ejemplo:
       await loginService.login({
        email: credentials.user,
        password: credentials.password,
      });
      // Redirigir a la página de inicio después de un login exitoso
      navigate(RoutesModulo.HOME);
    } catch (error) {
      console.error('Error en login', error);
      // Aquí puedes manejar los errores de login
    }
  };

  // Función para manejar cambios en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <>
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
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevenir el envío del formulario
              handleLogin(); // Llamar a la función de login
            }}
            className="space-y-6"
          >
            <div>
              <Label htmlFor="user">{'Usuario:'}</Label>
              <div className="mt-2">
                <Input
                  name="user"
                  type="text"
                  value={credentials.user}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{'Clave:'}</Label>
                <div className="text-sm">
                  <Link
                    onClick={() => {
                      navigate(RoutesModulo.PASSWORD_RESET);
                    }}
                  >
                    {'Olvidaste tu clave?'}
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <Button type="submit">{'Login'}</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {'Ya tienes cuenta? '}
            <Link
              onClick={() => {
                navigate(RoutesModulo.REGISTER);
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
