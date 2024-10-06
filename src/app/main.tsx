import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { AppRouter } from "./routers/AppRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AppRouter />
);
