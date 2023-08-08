import { useReservations } from "./ReservationsContext";
export default function Results() {
  const { reservations } = useReservations();
  return <p>🚀 {reservations.length} reservations found</p>;
}
