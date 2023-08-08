import { useReservations } from "./ReservationsContext";
export default function SearchReservations() {
  const { searchQuery, setSearchQuery } = useReservations();
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search reservations..."
    />
  );
}
