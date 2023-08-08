import { createContext, useState, useContext, useEffect } from "react";

const BASE_URL = "http://localhost:9000";
//1) Create a context
const ReservationContext = createContext();

function ReservationProvider({ children }) {
  const [reservations, setReservations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //Fetch the data from fake api server on component mount
  useEffect(function () {
    async function fetchReservations() {
      try {
        const res = await fetch(`${BASE_URL}/reservations`);
        const data = await res.json();
        console.log(data);
        setReservations(data);
      } catch {
        throw new Error("There was an error loading reservations...");
      }
    }
    fetchReservations();
  }, []);

  const searchedReservations =
    searchQuery.length > 0
      ? reservations.filter((reservation) =>
          `${reservation.firstName} ${reservation.lastName}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : reservations;

  function handleAddReservation(reservation) {
    setReservations((reservations) => [reservation, ...reservations]);
  }

  function handleClearReservations() {
    setReservations([]);
  }

  return (
    <ReservationContext.Provider
      value={{
        reservations: searchedReservations,
        onClearReservations: handleClearReservations,
        onAddReservation: handleAddReservation,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}

function useReservations() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error(
      "Reservation Context was used outside the context provider"
    );
  return context;
}
export { ReservationProvider, useReservations };
