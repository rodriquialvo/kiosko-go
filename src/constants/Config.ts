const PROD_URL = "https://api.newconnect.appwiseinnovations.com/api/v1"; // ← cambia por tu dominio de producción

const DEV_URL = "http://10.0.2.2:8010/api/v1"; // Android Emulator → localhost del PC

export const API_URL = __DEV__ ? DEV_URL : PROD_URL;
