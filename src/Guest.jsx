// Logic
import { useEffect } from "react";
import { useApi } from "./ApiContext";

// Components
import Header from "./Header";

// Render
export default function Guest({ id }) {
  const { guest, single, setPage, setGuest } = useApi();

  useEffect(() => {
    single(id);
  }, [id]);

  return (
    <div id="AppContext">
      <Header />
      <ul id="guestlist" className="details">
        <li>
          <em>Name:</em> {guest.name}
        </li>
        <li>
          <em>Email:</em> {guest.email}
        </li>
        <li>
          <em>Phone:</em> {guest.phone}
        </li>
        <li>
          <em>Bio:</em> {guest.bio}
        </li>
        <li>
          <em>Job:</em> {guest.job}
        </li>
      </ul>
      <p id="back" onClick={() => setPage("GUESTLIST")}>
        Back
      </p>
    </div>
  );
}
