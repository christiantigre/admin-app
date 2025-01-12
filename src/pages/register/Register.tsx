import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/Input/Input';
import { Label } from '../../components/ui/Label/Label';
import { Button } from '../../components/ui/Button/Button';
import { Link } from '../../components/ui/Link/Link';
import { RoutesModulo } from '../../enum/enum';
import { loginService } from '../../services/login/login.services';

// Definir los tipos para los valores del formulario de registro
interface RegisterRequest {
  name: string;
  email: string;
  contact: string;
  password: string;
  password_confirmation: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();

  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState<RegisterRequest>({
    name: '',
    email: '',
    contact: '',
    password: '',
    password_confirmation: '',
  });

  // Manejar los cambios en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para registrar el usuario
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.password_confirmation) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      // Enviar los datos a la API de registro
      await loginService.create(formData);

      // Redirigir al login después de un registro exitoso
      navigate(RoutesModulo.LOGIN);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      alert('Hubo un error al registrar la cuenta. Intenta nuevamente.');
    }
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
            {'Crea tu cuenta'}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleRegister} className="space-y-6">
          <div>
              <Label htmlFor="email">{'Nombre:'}</Label>
              <div className="mt-2">
                <Input
                  name="name"
                  type="string"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">{'Correo:'}</Label>
              <div className="mt-2">
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="contact">{'Telefono:'}</Label>
              <div className="mt-2">
                <Input
                  name="contact"
                  type="text"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password">{'Clave:'}</Label>
              <div className="mt-2">
                <Input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="password_confirmation">{'Confirmar Clave:'}</Label>
              <div className="mt-2">
                <Input
                  name="password_confirmation"
                  type="password"
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <Button type="submit">{'Registrar'}</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {'Ya tengo una cuenta '}
            <Link
              onClick={() => {
                navigate(RoutesModulo.LOGIN);
              }}
            >
              {'ingresar a mi cuenta'}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
