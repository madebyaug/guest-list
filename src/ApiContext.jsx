import { createContext, useContext, useState } from "react";

const API = `https://fsa-crud-2aa9294fe819.herokuapp.com/api`;
const COHORT = `/2504-FTB-ET-WEB-PT/`;
const ENDPOINT = `guests`;
export const URL = API + COHORT + ENDPOINT;

const ApiContext = createContext(null);

export default function ApiProvider({ children }) {
  const [page, setPage] = useState({ name: "GUESTLIST", id: null });
  const [guests, setGuests] = useState([]);
  const [guest, setGuest] = useState({});

  async function group() {
    const response = await fetch(URL, { method: "GET" });
    if (!response.ok) throw new Error("Data Not Found");
    const result = await response.json();
    setGuests(result.data); // Set state inside ApiProvider
    return result.data;
  }

  async function single(id) {
    const response = await fetch(URL + `/${id}`, { method: "GET" });
    if (!response.ok) throw new Error("Data Not Found");
    const result = await response.json();
    setGuest(result.data); // Set state inside ApiProvider
    return result.data;
  }

  const value = {
    group,
    single,
    page,
    setPage,
    guests,
    guest,
    setGuests,
    setGuest,
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export function useApi() {
  const context = useContext(ApiContext);
  if (!context) throw new Error("useApi must be used within ApiProvider");
  return context;
}
