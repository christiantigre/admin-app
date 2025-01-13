// src/services/notificationService.ts

import { enqueueSnackbar, SnackbarOrigin } from 'notistack';

// Definir las variantes de las notificaciones
type NotificationVariant =  'default' | 'error' | 'success' | 'warning' | 'info';

// Tipo de notificación personalizada
interface CustomNotificationOptions {
  persist?: boolean;
  allowDownload?: boolean;
  anchorOrigin?:  SnackbarOrigin
  // Agrega más opciones personalizadas si es necesario
}

// Función para mostrar notificaciones
export const showNotification = (
  message: string,
  variant: NotificationVariant,
  options: CustomNotificationOptions = {}
) => {
  if (options?.anchorOrigin === null || options.anchorOrigin === undefined) {
    options.anchorOrigin = {
      vertical: 'top',
    horizontal: 'right',
    }
  }
  enqueueSnackbar(message, {
    variant: variant,
      ...options,
  });
};

// Función para mostrar una notificación de tipo 'reportComplete'
// export const showReportCompleteNotification = (message: string, options: CustomNotificationOptions = {}) => {
//   showNotification(message, 'reportComplete', options);
// };
