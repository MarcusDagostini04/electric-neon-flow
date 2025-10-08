import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logoImg from "@/assets/logo.jpg";

// Update favicon to use project logo
const setFavicon = (href: string, type?: string) => {
  const link = document.querySelector<HTMLLinkElement>("link[rel='icon']") || document.createElement("link");
  link.rel = "icon";
  if (type) link.type = type;
  link.href = href;
  if (!link.parentNode) document.head.appendChild(link);
};

setFavicon(logoImg);

createRoot(document.getElementById("root")!).render(<App />);
