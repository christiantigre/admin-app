/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { post } from './request/request.service';

export const loginService = { login, getUser, logout, create };

const API_BASE_URL = 'https://your-api-domain.com/api'; // Reemplaza con tu URL base

// Define los tipos para los datos de entrada y respuesta
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

// Configuración global de Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Servicio para el login
async function  login  (credentials: LoginRequest): Promise<LoginResponse>  {
  try {
    const response = await post<LoginResponse>('/login', credentials as unknown as Record<string, unknown>);

    return response.data;
  } catch (error: any) {

    if (error && error.response) {
      // Manejar errores de la API
      throw new Error(error.response.data.message || 'Error al iniciar sesión');
    } else {
      // Manejar errores de red
      throw new Error('No se pudo conectar al servidor');
    }
  }
};

async function  create  (credentials: LoginRequest): Promise<LoginResponse>  {
  try {
    const response = await post<LoginResponse>('/register', credentials as unknown as Record<string, unknown>);

    return response.data;
  } catch (error: any) {

    if (error && error.response) {
      // Manejar errores de la API
      throw new Error(error.response.data.message || 'Error al iniciar sesión');
    } else {
      // Manejar errores de red
      throw new Error('No se pudo conectar al servidor');
    }
  }
};

// Servicio para obtener información del usuario autenticado
async function getUser(token: string): Promise<any>  {
  try {
    const response = await api.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Error al obtener datos del usuario');
    } else {
      throw new Error('No se pudo conectar al servidor');
    }
  }
};

// Servicio para cerrar sesión
async function logout (token: string): Promise<void>  {
  try {
    await api.post(
      '/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Error al cerrar sesión');
    } else {
      throw new Error('No se pudo conectar al servidor');
    }
  }
};
