import { useReservations } from "./ReservationsContext";
import Results from "./Results";
import SearchReservations from "./SearchedReservations";

export default function Header() {
  //3- CONSUMING CONTEXT VALUE - Read the function onclearreservations from the context
  const { onClearReservations } = useReservations();
  return (
    <header>
      <h1>
        <span>⚛️</span>Idemia Reservation System
      </h1>
      <div>
        <Results />
        <SearchReservations />
        <button onClick={onClearReservations}>Clear reservations</button>
      </div>
    </header>
  );
}
