import { useState } from "react";
import { faker } from "@faker-js/faker";
import { useReservations } from "./ReservationsContext";

function createRandomReservations() {
  return {
    firstName: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    lastName: faker.hacker.phrase(),
  };
}
function Archive() {
  const [reservations] = useState(() =>
    Array.from({ length: 5 }, () => createRandomReservations())
  );

  const [showArchive, setShowArchive] = useState(false);
  const { onAddReservation } = useReservations();
  return (
    <aside>
      <h2>Reservation archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive
          ? "Hide archive reservations"
          : "Show archive reservations"}
      </button>

      {showArchive && (
        <ul>
          {reservations.map((reservation, i) => (
            <li key={i}>
              <p>
                <strong>{reservation.firstName}:</strong> {reservation.lastName}
              </p>
              <button onClick={() => onAddReservation(reservation)}>
                Add as new reservation
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
export default Archive;
