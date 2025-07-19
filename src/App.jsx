// Logic
import { useApi } from "./ApiContext";

// Component
import GuestList from "./GuestList";
import Guest from "./Guest";

// Render
export default function App() {
  const { page } = useApi();

  if (page.name === "GUEST") return <Guest id={page.id} />;
  if (!page) return null;
  return <GuestList />;
}
