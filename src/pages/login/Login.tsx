import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/ui/Input/Input';
import { Label } from '../../components/ui/Label/Label';
import { Button } from '../../components/ui/Button/Button';
import { Link } from '../../components/ui/Link/Link';
import { RoutesModulo } from '../../enum/enum';
import { loginService } from '../../services/login/login.services';
import { showNotification } from '../../services/notify/notify.service';
import  Loader  from '../../components/ui/Loader/Loaders';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  // Esquema de validación con Yup
  const validationSchema = Yup.object({
    user: Yup.string()
      .email('El formato del correo es inválido.')
      .required('El correo electrónico es requerido.'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres.')
      .required('La contraseña es requerida.'),
  });

  // Formik para manejar el formulario
  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await loginService.login({
          email: values.user,
          password: values.password,
        });
        showNotification('Acceso correcto.', 'success');
        navigate(RoutesModulo.HOME);
      } catch (error) {
        showNotification('Error en login: ' + JSON.stringify(error), 'error');
        console.error('Error en login', error);
      }
    },
  });

  return (
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
       <Loader isOpen={loading} />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="user">{'Usuario:'}</Label>
            <div className="mt-2">
              <Input
                name="user"
                type="text"
                value={formik.values.user}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.user && Boolean(formik.errors.user)}
              />
              {formik.touched.user && formik.errors.user && (
                <p className="mt-2 text-sm text-red-600">
                  <span className="font-medium">{formik.errors.user}</span>
                </p>
              )}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  <span className="font-medium">{formik.errors.password}</span>
                </p>
              )}
            </div>
          </div>

          <div>
            <Button type="submit">{'Login'}</Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {'¿No tienes una cuenta? '}
          <Link
            onClick={() => {
              navigate(RoutesModulo.REGISTER);
            }}
          >
            {'Regístrate aquí'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
