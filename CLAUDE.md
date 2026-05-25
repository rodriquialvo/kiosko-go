# AGENTS.md

## Project Context

This is a React Native project using TypeScript.

The project may use either:
- Expo / Expo Router
- React Native CLI
- React Navigation

Before making changes, inspect the repository structure and follow the existing conventions.

Do not assume the app uses Expo Router, React Navigation, NativeWind, Zustand, Redux, React Query, Supabase, Firebase, or any other library unless it already exists in the project.

## Main Goals

- Keep the code simple, readable, and maintainable.
- Prefer small, reusable components.
- Preserve the existing architecture and naming conventions.
- Make minimal changes directly related to the user request.
- Avoid large refactors unless explicitly requested.

## Language and Comments

- User-facing explanations may be in Spanish.
- Code, comments, variable names, function names, and documentation must be in English.
- Avoid unnecessary comments.
- Add comments only when the reason for the code is not obvious.

## TypeScript Rules

- Use strict TypeScript.
- Always type component props.
- Avoid `any`.
- Avoid untyped objects, arrays, callbacks, and function returns.
- Prefer explicit types for exported functions, hooks, utilities, and component props.
- Use `type` for object shapes unless an existing file uses `interface`.
- Reuse existing types before creating new ones.
- Do not create generic types unless they are actually needed.

## React Native Style

- Use functional components only.
- Do not use class components.
- Keep components focused on one responsibility.
- Prefer composition over large configurable components.
- Avoid boolean props that drastically change component behavior.
- Extract repeated UI into reusable components only when repetition is clear.
- Keep platform-specific logic isolated when possible.
- Avoid unnecessary re-renders.
- Use `useMemo`, `useCallback`, and `memo` only when there is a real performance reason.

## File Organization

Follow the existing project structure.

When creating a new component, prefer this structure if the project already separates styles:

ComponentName/
  ComponentName.tsx
  ComponentName.styles.ts
  index.ts

If the project does not use folders per component, match the existing style.

For screens, prefer:

ScreenName/
  ScreenName.tsx
  ScreenName.styles.ts
  index.ts

Do not move files or rename folders unless necessary.

## Styling Rules

- Follow the styling approach already used in the project.
- If the project uses `StyleSheet.create`, continue using it.
- If the project uses a theme file, use theme colors, spacing, radius, typography, and shadows from the theme.
- Do not hardcode colors if theme tokens exist.
- Do not introduce a new styling library.
- Keep styles in `.styles.ts` files when that pattern already exists.
- Avoid inline styles except for very small dynamic values.
- Use clear style names.

Example style names:

container
title
subtitle
content
button
buttonText

## Expo Rules

If this is an Expo project:

- Before writing Expo-related code, read the exact versioned docs at https://docs.expo.dev/versions/v56.0.0/.
- Prefer Expo-compatible libraries.
- Do not add native modules that require prebuild unless explicitly approved.
- Do not modify `ios/` or `android/` folders unless the project already uses prebuild or React Native CLI.
- For navigation, check whether the project uses Expo Router or React Navigation before editing routes.
- For images and assets, follow the existing `assets/` organization.

## React Navigation Rules

If the project uses React Navigation:

- Check the existing navigator structure before adding screens.
- Use existing route name conventions.
- Keep route params typed.
- Do not add screens to navigators without verifying where they belong.
- Do not create duplicate navigation types if they already exist.

## Expo Router Rules

If the project uses Expo Router:

- Follow the existing `app/` directory structure.
- Respect route groups such as `(auth)`, `(tabs)`, `(dashboard)`, etc.
- Do not change layout files unless necessary.
- Keep screen-specific logic inside the route file or nearby components.
- Do not introduce React Navigation setup manually unless the project already does so.

## State Management

- Use the state management library already present in the project.
- If Zustand is used, keep stores small and focused.
- Do not add Redux, Zustand, React Query, Jotai, MobX, or Context unless explicitly requested.
- Use local component state when state does not need to be shared.
- Avoid storing derived state when it can be computed.

## API and Data Fetching

- Follow the existing API/client pattern.
- Do not invent endpoints.
- Do not change request/response shapes without checking existing usage.
- Keep API calls outside UI components when the project already has services or hooks.
- Handle loading, empty, and error states.
- Never silently ignore API errors.
- Do not add fallback data unless explicitly requested.

## Forms and Validation

- Follow the existing form strategy.
- If the project already uses React Hook Form, Formik, Zod, Yup, or custom validation, continue with that.
- Keep validation messages clear and user-friendly.
- Do not add a new validation library unless necessary and approved.
- Avoid duplicating validation logic.

## Error Handling

- Do not swallow errors.
- Use explicit error handling.
- Show useful error states in the UI when relevant.
- Preserve useful debugging context.
- Avoid broad `catch` blocks that hide the real issue.
- Do not use fake success states.

## Dependencies

- Do not install new dependencies unless necessary.
- Before adding a dependency, check whether the project already has a solution.
- If a dependency is needed, add it to the correct project config file.
- For Expo projects, prefer `npx expo install` when installing Expo-compatible packages.
- Never install dependencies globally.
- Do not update unrelated dependencies.

## Assets and Images

- Reuse existing assets when available.
- Keep assets organized according to the existing folder structure.
- For React Native images, use proper sizing and resize modes.
- Do not add remote placeholder images unless requested.
- Do not assume image dimensions without checking usage.

## Accessibility

- Add accessibility labels for tappable controls when useful.
- Use readable text sizes.
- Ensure touch targets are reasonably sized.
- Do not rely only on color to communicate state.

## Testing and Validation

Before finishing, run the validation commands that already exist in the project.

Check `package.json` for scripts such as:

npm run lint
npm run typecheck
npm run test
npm run format

Use the package manager already used by the project:

- `npm` if `package-lock.json` exists
- `yarn` if `yarn.lock` exists
- `pnpm` if `pnpm-lock.yaml` exists
- `bun` if `bun.lockb` or `bun.lock` exists

Do not add new tests by default.

Add tests only when:
- The project already has a testing strategy.
- The change affects important business logic.
- The user explicitly asks for tests.
- A bug fix needs regression coverage.

Prefer integration, smoke, or behavior-focused tests over fragile implementation tests.

## Git Rules

- Never create a commit unless explicitly asked.
- Never push changes unless explicitly asked.
- Do not revert unrelated changes.
- Do not overwrite user work.
- Before editing, check current changes when relevant:

git status --short

- Use non-interactive diffs:

git --no-pager diff

## Search and Inspection

Prefer fast, non-interactive commands.

Use:

rg "search term"
rg --files
ls
cat
sed -n '1,160p' file.tsx

Avoid interactive commands.

Do not make assumptions when the code can be inspected.

## Implementation Workflow

For every task:

1. Inspect the relevant files.
2. Understand the existing pattern.
3. Make the smallest correct change.
4. Keep naming consistent.
5. Validate with existing scripts if available.
6. Summarize what changed.
7. Mention any validation command run.
8. Mention if validation could not be run.

## Component Creation Rules

When the user asks for a new component:

- Create a typed functional component.
- Create a separate styles file if the project uses that convention.
- Export it consistently with the project.
- Include an example of usage if the user asks in chat or if the repository has examples/stories.
- Use existing shared components such as `Text`, `Button`, `Input`, `Card`, or theme utilities when available.
- Do not introduce new design primitives when existing ones can be reused.

## Screen Creation Rules

When creating a screen:

- Follow the existing screen folder pattern.
- Use existing layout wrappers if available.
- Handle safe areas according to the project convention.
- Keep navigation logic typed.
- Keep business logic out of the JSX when possible.
- Add loading, empty, and error states when data is involved.

## Performance Rules

- Avoid unnecessary state.
- Avoid expensive calculations inside render.
- Use `FlatList` for long lists.
- Provide stable keys.
- Avoid anonymous heavy render functions for large lists.
- Do not optimize prematurely.

## Security and Secrets

- Never hardcode secrets, API keys, tokens, passwords, or private URLs.
- Use existing environment variable patterns.
- Do not print secrets in logs.
- Do not commit `.env` files unless the project already tracks safe example files.
- Use `.env.example` for placeholder documentation if needed.

## Supabase / Backend Rules

If Supabase is used:

- Reuse the existing Supabase client.
- Do not create multiple clients unless required.
- Keep database logic in services, hooks, or repositories according to existing architecture.
- Do not expose service role keys in the app.
- Handle auth state explicitly.
- Handle upload errors and database errors explicitly.
- Do not assume table names or column names without checking existing types or queries.

## Output Expectations

When finishing a task, provide:

- A concise summary of changes.
- Files changed.
- Validation commands run.
- Any important notes or limitations.

Do not include long explanations unless needed.
