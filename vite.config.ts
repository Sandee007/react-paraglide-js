import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { paraglide } from "@inlang/paraglide-vite";
import path from "node:path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    paraglide({
			project: "./project.inlang",
			outdir: "./src/paraglide",
		}),
  ],
  resolve: {
		alias: {
			$paraglide: path.resolve(__dirname, "./src/paraglide"),
		},
	},
});
