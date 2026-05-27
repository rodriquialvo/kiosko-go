# KioskoGo App

## Español

KioskoGo es una app mobile para gestionar operaciones de kiosco: login, inicio, ventas, carrito, cobro, confirmación de venta y control de stock.

El proyecto está construido con React Native, TypeScript, Expo SDK 56 y Expo Router.

### Requisitos

- Node.js compatible con Expo SDK 56.
- npm.
- Expo CLI mediante `npx expo`.
- Android Studio o Xcode si se quiere correr en emulador/simulador nativo.

### Instalación

```bash
npm install
```

### Scripts

```bash
npm run start
npm run start:devtools
npm run start:tunnel
npm run android
npm run ios
npm run web
```

### Validación

Para validar el bundle de iOS:

```bash
npx expo export --platform ios --clear
```

Para revisar TypeScript:

```bash
npx tsc --noEmit --ignoreDeprecations 6.0
```

Nota: el typecheck puede mostrar errores preexistentes en rutas antiguas, configuración de header y tests. Revisar esos errores antes de tomar el resultado como bloqueo de una pantalla nueva.

### Estructura principal

- `app/`: rutas de Expo Router.
- `src/screens/`: pantallas de la app.
- `src/components/`: componentes reutilizables.
- `src/features/`: estado y lógica compartida entre pantallas.
- `src/theme/`: tokens de tema, incluyendo colores.
- `assets/`: imágenes y recursos estáticos.

### Convenciones de pantallas

Las pantallas siguen este patrón:

```text
screen-name/
  screen-name.screen.tsx
  screen-name.controller.tsx
  screen-name.styles.ts
  components/
```

- `.screen.tsx`: estructura visual.
- `.controller.tsx`: estado, datos y acciones.
- `.styles.ts`: estilos de React Native.
- `components/`: piezas reutilizables propias de la pantalla.

### Componentes compartidos

Algunos componentes base usados en toda la app:

- `ScreenContainer`: contenedor visual principal con el background de la app.
- `AppHeader`: header reutilizable.
- `PrimaryButton`: botón principal.
- `SearchBar`: barra de búsqueda.
- `Text`: componente de texto con tipografía Montserrat.

### Tema y colores

Los colores deben definirse en:

```text
src/theme/src/theme/colors.ts
```

Los componentes deben consumir colores desde el theme y evitar valores hardcodeados.

---

## English

KioskoGo is a mobile app for kiosk operations: login, home, sales, cart, checkout, sale confirmation, and stock control.

The project is built with React Native, TypeScript, Expo SDK 56, and Expo Router.

### Requirements

- Node.js compatible with Expo SDK 56.
- npm.
- Expo CLI through `npx expo`.
- Android Studio or Xcode if you want to run native emulators/simulators.

### Installation

```bash
npm install
```

### Scripts

```bash
npm run start
npm run start:devtools
npm run start:tunnel
npm run android
npm run ios
npm run web
```

### Validation

To validate the iOS bundle:

```bash
npx expo export --platform ios --clear
```

To check TypeScript:

```bash
npx tsc --noEmit --ignoreDeprecations 6.0
```

Note: typecheck may currently report pre-existing issues in old routes, header configuration, and tests. Review those errors before treating the result as a blocker for a new screen.

### Main Structure

- `app/`: Expo Router routes.
- `src/screens/`: app screens.
- `src/components/`: reusable components.
- `src/features/`: shared state and cross-screen logic.
- `src/theme/`: theme tokens, including colors.
- `assets/`: images and static assets.

### Screen Conventions

Screens follow this pattern:

```text
screen-name/
  screen-name.screen.tsx
  screen-name.controller.tsx
  screen-name.styles.ts
  components/
```

- `.screen.tsx`: visual structure.
- `.controller.tsx`: state, data, and actions.
- `.styles.ts`: React Native styles.
- `components/`: reusable pieces owned by the screen.

### Shared Components

Core shared components used across the app:

- `ScreenContainer`: main visual wrapper with the app background.
- `AppHeader`: reusable header.
- `PrimaryButton`: main action button.
- `SearchBar`: reusable search input.
- `Text`: text component using Montserrat typography.

### Theme and Colors

Colors must be defined in:

```text
src/theme/src/theme/colors.ts
```

Components should consume colors from the theme and avoid hardcoded color values.
