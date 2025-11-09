import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ 최신 Sass 방식(sass-embedded) 사용 강제
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern" // Dart Sass 최신 API 방식
      }
    }
  }
});
