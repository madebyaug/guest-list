// Logic
import { useEffect } from "react";
import { useApi } from "./ApiContext";

// Components
import Header from "./Header";

// Render
export default function GuestList() {
  const { guests, group, setPage } = useApi();

  useEffect(() => {
    group();
  }, []);

  return (
    <>
      <div id="AppContext">
        <Header />
        <div id="headerlist">
          <h3>–– Name ––</h3>
          <h3>–– Email ––</h3>
          <h3>–– Phone ––</h3>
        </div>
        <ul id="guestlist">
          {guests.map((data) => (
            <li
              onClick={() => setPage({ name: "GUEST", id: data.id })}
              key={data.id}
              className="guest"
            >
              <div>{data.name}</div>
              <div>{data.email}</div>
              <div>{data.phone}</div>
            </li>
          ))}
        </ul>
        <p>Select a guest to see more details.</p>
      </div>
    </>
  );
}
