import axios
  from 'axios';

// URL base de la API
const API_BASE_URL = 'http://127.0.0.1:8001/api/'; // Reemplaza con tu URL base

// Configuración global de Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Define un tipo genérico para las respuestas
interface ApiResponse<T> {
  data: T;
  message?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Si tu API devuelve otros campos adicionales
}

// Función para generar headers dinámicos
const getHeaders = (): Record<string, string> => {
  // Ejemplo: Si necesitas agregar un token de autenticación
  const token = localStorage.getItem('access_token'); // O reemplaza por otra fuente
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

// Servicio genérico para POST
export const post = async<T> (endponit: string, payload: Record<string, unknown> | null = null ): Promise<ApiResponse<T>> => {
  try {
    const response = await api.post(endponit, payload || {}, {
      headers: getHeaders(),
    });
    console.log('Login post', response);

    return response.data;
  } catch (error) {

    handleError(error, 'Error al realizar la solicitud POST');
    throw error; // Esto asegura que la función siempre tiene un retorno explícito
  }
};

// Servicio genérico para GET
export const get = async<T> (endponit:string): Promise<ApiResponse<T>> => {
  try {
    const response = await api.get(endponit, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    handleError(error, 'Error al realizar la solicitud GET');
    throw error; // Esto asegura que la función siempre tiene un retorno explícito
  }
};

// Servicio genérico para DELETE
export const del = async<T> (endponit: string): Promise<ApiResponse<T>> => {
  try {
    const response = await api.delete(endponit, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    handleError(error, 'Error al realizar la solicitud DELETE');
    throw error; // Esto asegura que la función siempre tiene un retorno explícito
  }
};

// Servicio genérico para PUT
export const put = async<T> (endponit: string, payload
  : Record<string, unknown> | null = null): Promise<ApiResponse<T>> => {
  try {
    const response = await api.put(endponit, payload || {}, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    handleError(error, 'Error al realizar la solicitud PUT');
    throw error; // Esto asegura que la función siempre tiene un retorno explícito
  }
};

// Función para manejar errores
// Manejo de errores
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError = (error: any, defaultMessage: string): never => {
  if (error.response) {
    throw new Error((error.response.data as { message?: string }).message || defaultMessage);
  } else {
    throw new Error('No se pudo conectar al servidor');
  }
};