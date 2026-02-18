import { defineConfig } from 'vite'

// NOTE: Removed @vitejs/plugin-react to avoid ESM/Node version issues in the
// current environment. The app will still run without the plugin. To add
// fast-refresh and other React-specific tooling later, install a plugin
// version compatible with your Node version (or upgrade Node) and re-enable it.
export default defineConfig({})
