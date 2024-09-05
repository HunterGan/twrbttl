import { createRoot } from 'react-dom/client'
import '@/app/index.css';
import App from '@/app';
import { BrowserRouter, StoreProvider } from "@/app/providers";
import "@/shared/config/i18n"

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StoreProvider>
)
