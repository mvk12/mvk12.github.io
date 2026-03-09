# Agent Instructions for mvk12.github.io

This repository is a Vue 3 + Vite portfolio with TypeScript in strict mode.
Use this file as the single source of truth for build/lint/test commands and
code style conventions for agentic coding.

## Runtime + Tooling

- Package manager: **pnpm only** (do not use npm or yarn).
- Framework: Vue 3 + Vue Router.
- Build tool: Vite (rolldown-vite).
- TypeScript: strict mode is enabled in `tsconfig.app.json`.
- Styling: global CSS in `src/css/main.css` plus scoped SFC styles.

## Commands (Build / Lint / Type Check / Format)

Install:

```bash
pnpm install
```

Dev server:

```bash
pnpm run dev
```

Production build:

```bash
pnpm run build
```

Preview build:

```bash
pnpm run preview
```

Type check (required after changes):

```bash
pnpm exec vue-tsc -b
```

Format (Prettier):

```bash
pnpm exec prettier src --write
```

Lint (ESLint + auto-fix):

```bash
pnpm exec eslint src --fix
```

Testing:

- No test runner configured in `package.json`.
- Single test execution is **not available** until a test framework is added.
- If you add a test runner, document the exact single-test command here.

## Project Structure

```
src/
  App.vue                # Root component
  main.ts                # Entry point
  router/                # Vue Router config
  components/            # Reusable components (PascalCase)
  views/                 # Route views
  composables/           # Reusable composables
  css/                   # Global styles
```

Key config files:

- `eslint.config.mjs` (Vue + TypeScript rules)
- `tsconfig.app.json` (strict type checking)
- `.prettierrc.mts` (Prettier rules)

## Coding Conventions

### Vue SFCs

- Always use `<script setup lang="ts">`.
- Prefer Composition API (`ref`, `computed`, `watch`, `onMounted`).
- Components are PascalCase filenames (e.g., `ThemeToggle.vue`).
- Use `<style scoped>` for component-local styles unless global is required.
- Keep template markup semantic (headings, lists, `main`, `section`).

### TypeScript + Types

- No implicit `any`. Provide explicit types for function params/returns.
- In SFCs, define props with `interface` + `defineProps`.
- Use `withDefaults` for optional props with defaults.
- Prefer type-only imports (`import type { ... }`) when applicable.

### Imports

- Order: external libs → type-only imports → local modules.
- Use relative imports for local modules (e.g., `./components/AppLayout.vue`).
- Keep imports grouped with a blank line between groups.

### Naming

- Components: PascalCase.
- Composables: `useX` (e.g., `useTheme`).
- Variables and functions: camelCase.
- CSS classes: kebab-case.
- Routes: short, lowercase names (e.g., `home`, `projects`).

### Formatting

Prettier config (`.prettierrc.mts`):

- `singleQuote: true`
- `semi: false`
- `trailingComma: 'es5'`
- `tabWidth: 2`

### ESLint

- Vue strongly-recommended rules are enabled.
- `@typescript-eslint/no-unused-vars` is **warn** with `_`-prefixed ignores.
- Prefer removing unused code, not disabling rules.

### Error Handling

- Handle browser APIs defensively (e.g., localStorage, matchMedia).
- Avoid throwing in UI code; instead fail gracefully and keep UI responsive.
- For async work, surface errors via UI state when feasible.

## Component Template (Preferred Pattern)

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>

<template>
  <div class="example">
    <p>{{ doubled }}</p>
    <button @click="count++">Increment</button>
  </div>
</template>

<style scoped>
.example {
  display: grid;
  gap: 0.5rem;
}
</style>
```

## When Adding a New Component

1. Create `src/components/MyComponent.vue`.
2. Import in `src/App.vue` or a view/parent component.
3. Wire it into the template.
4. Run `pnpm exec vue-tsc -b`.
5. Run `pnpm exec prettier src --write`.
6. Run `pnpm exec eslint src --fix`.

## Git + Commits

- Use conventional commits: `feat:`, `fix:`, `refactor:`, `chore:`, etc.
- Keep commits focused on one logical change.
