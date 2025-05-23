# 🌐 Tailwind Multi-Config with Scoped Layouts

This repository demonstrates how to use **multiple Tailwind CSS configurations** in a single Next.js project — allowing you to **gradually migrate a design system** or maintain multiple themes in a clean, scalable way.

## 🌟 Use Case

- You're updating your design system but want to **keep the old one running**.
- You're using a **monorepo or multi-layout app** and need **isolated Tailwind configs**.
- You want **zero clashes in design tokens (colors, spacing, etc.)** without modifying class names.

---

## 🚀 How It Works

We use **two separate Tailwind config files** and scope each one using a wrapper class (e.g., `.new`, `.old`) so they can coexist.

### 📁 Folder Structure

```
public/
  ├── file.svg
  ├── globe.svg
  ├── next.svg
  ├── vercel.svg
  └── window.svg
src/
  └── app/
      ├── (new-design)/
      │   ├── designs/
      │   │   └── new/
      │   │       └── page.tsx
      │   ├── layout.tsx
      │   └── new.css
      ├── (old-design)/
      │   ├── designs/
      │   │   └── old/
      │   │       └── page.tsx
      │   ├── layout.tsx
      │   ├── old.css
      │   └── page.tsx
      ├── favicon.ico
      └── layout.tsx
.gitignore
eslint.config.mjs
next.config.ts
package-lock.json
package.json
postcss.config.mjs
README.md
tailwind.new.config.ts
tailwind.old.config.ts
tsconfig.json
```

### ⚙️ Config Setup

#### `src/app/(old-design)/old.css`

```css
@config '../../../../tailwind.old.config.ts';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### `src/app/(new-design)/new.css`

```css
@config '../../../../tailwind.new.config.ts';

.new {
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
}
```

### 🧱 Layout Implementation

#### `src/app/(old-design)/layout.tsx`

```tsx
import "./old.css";

export default function OldLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

#### `src/app/(new-design)/layout.tsx`

```tsx
import "./new.css";

export default function NewLayout({ children }: { children: React.ReactNode }) {
  return <div className="new">{children}</div>;
}
```

---

## ✨ Advantages

✅ No need for Tailwind's `prefix` option
✅ No need to rewrite utility class names
✅ Supports gradual migration and design experimentation
✅ Layout-based scoping: clean, explicit, and modular

---

## 🧪 Demo Pages

Visit:

- `/designs/old` → old Tailwind design system
- `/designs/new` → new Tailwind design system (scoped inside `.new`)

Both pages use the same markup and classes — but they get different styles based on the layout.

---

## 📦 Run Locally

```bash
git clone https://github.com/MelancholYA/taiwlind-mutliconfig.git
cd taiwlind-mutliconfig
yarn install
yarn dev
```

---

## 💡 Tips

- You can extend this pattern to support 3+ themes.
- Consider extracting common components and conditionally styling them based on parent scope (`.old` or `.new`).
- If using Tailwind plugins, be sure they’re configured in both config files.

---

## 📄 License

MIT — use freely, credit appreciated!
