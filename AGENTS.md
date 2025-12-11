# Agent Instructions for mvk12.github.io

## Quick Start for AI Agents

This document provides essential guidance for AI agents working autonomously on this Vue 3 + Vite portfolio project.

### Before You Start

1. **Always use `pnpm`** - not npm or yarn
2. **Run type check after changes**: `pnpm exec vue-tsc -b`
3. **Apply prettier**: `pnpm exec prettier src --write`
4. **Lint before committing**: `pnpm exec eslint src --fix`

## Key Project Facts

- **Framework:** Vue 3.5.25 with `<script setup>` (Composition API)
- **Build Tool:** Vite 7.2.7
- **Language:** TypeScript 5.9.3 (strict mode ON)
- **Package Manager:** pnpm (exclusive)
- **Dev Server:** `http://localhost:5173` (via `pnpm run dev`)

## File Structure to Know

```
src/
├── App.vue              # Root component - import all features here
├── main.ts              # Entry point
├── components/          # Reusable components (PascalCase filenames)
└── assets/              # Static files

tsconfig.app.json       # App-specific TS config (strict: true)
eslint.config.mjs       # Linter rules (Vue + TypeScript)
vite.config.ts          # Build configuration
```

## Component Creation Pattern

Always follow this template when creating new components:

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

// All reactive state and computed values here
const state = ref(0)
const derived = computed(() => state.value * 2)
</script>

<template>
  <div class="component">
    <p>{{ derived }}</p>
    <button @click="state++">Increment</button>
  </div>
</template>

<style scoped>
/* Component-specific styles */
</style>
```

**Rules:**

- Always use `lang="ts"` in script tags
- Use `<script setup>` (no Options API)
- Use `ref()` for mutable state, `computed()` for derived values
- Filename must be PascalCase: `MyComponent.vue`
- Import and register in `App.vue`

## Common Tasks

### Adding a New Component

1. Create `src/components/MyComponent.vue`
2. Import in `src/App.vue`: `import MyComponent from './components/MyComponent.vue'`
3. Add to template in `App.vue`
4. Run: `pnpm exec vue-tsc -b` (must have zero errors)
5. Run: `pnpm exec prettier src --write` (format code)
6. Run: `pnpm exec eslint src --fix` (lint and fix)

### Testing Changes

```bash
pnpm run dev                    # Start dev server
pnpm exec vue-tsc -b            # Type check (must pass)
pnpm exec prettier src --write  # Format code with Prettier
pnpm exec eslint src --fix      # Fix linting issues
pnpm run build                  # Verify production build works
```

## Type Safety Requirements

**Strict mode is enabled.** Every issue must be resolved:

```typescript
// ❌ BAD - implicit `any`
const processData = (data) => { ... }

// ✅ GOOD - explicit types
const processData = (data: Record<string, unknown>): void => { ... }
```

**In Vue components:**

```vue
<script setup lang="ts">
// ✅ GOOD - typed props
interface Props {
  count: number
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Counter',
})
</script>
```

## Build & Deployment

- Production build: `pnpm run build` (output: `dist/`)
- Preview: `pnpm run preview`
- The project is deployed to GitHub Pages (branch context: mvk12/mvk12.github.io)

## Git & Commits

- **Repository:** mvk12/mvk12.github.io
- Use conventional commits: `feat:`, `fix:`, `refactor:`, etc.

Example:

```
feat: add dark mode toggle component
fix: resolve TypeScript strict mode errors in HelloWorld
```

## Decision-Making Guide

### When Adding Features

1. ✅ Create component in `src/components/`
2. ✅ Use `<script setup>` with full TypeScript typing
3. ✅ Import and use in `App.vue`
4. ✅ Run type check + linting
5. ❌ Don't modify tsconfig without asking
6. ❌ Don't use npm/yarn (always pnpm)

### When Fixing Errors

- Type errors: Check `tsconfig.app.json` and `env.d.ts` first
- Import errors: Verify file paths (case-sensitive on Linux)
- Formatting errors: Run `pnpm exec prettier src --write` first
- Linting errors: Run `pnpm exec eslint src --fix` after formatting

## Useful Commands Reference

| Command                          | Purpose                     |
| -------------------------------- | --------------------------- |
| `pnpm install`                   | Install/update dependencies |
| `pnpm run dev`                   | Start dev server            |
| `pnpm run build`                 | Build for production        |
| `pnpm exec vue-tsc -b`           | Type check all files        |
| `pnpm exec prettier src --write` | Format code with Prettier   |
| `pnpm exec eslint src --fix`     | Lint and auto-fix           |
| `pnpm run preview`               | Preview production build    |

## Need Help?

- Check `package.json` for exact dependency versions
- Review `HelloWorld.vue` for component pattern examples
- This `AGENTS.md` file contains all guidance needed for autonomous AI work
