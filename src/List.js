import { useReservations } from "./ReservationsContext";

function List() {
  const { reservations } = useReservations();
  return (
    <ul>
      {reservations.map((reservation, i) => (
        <li key={i}>
          <h3>{reservation.firstName}</h3>
          <p>{reservation.lastName}</p>
        </li>
      ))}
    </ul>
  );
}
export default List;
