import React, { useState, useEffect, useRef } from "react";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switches from "./Switches";
// import Tags from "./Tags";
import Payment from "./Payment";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SelectState from "./SelectState";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
// import { IReservation } from "../interfaces/Booking";

import { useReservations } from "./ReservationsContext";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "15px",

    marginLeft: "20px",
  },
});

function FormAddReservation() {
  const { onAddReservation } = useReservations();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");

  const [stay, setStay] = useState({});
  const [roomSize, setRoomSize] = useState("presidential-suite");
  const [roomQuantity, setRoomQuantity] = useState(1);
  const [streetName, setStreetName] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [extras, setExtras] = useState([]);
  const [tags, setTags] = useState([]);
  const [payment, setPayment] = useState("");

  const [arrivalDate, setArrivalDate] = useState(
    new Date().toLocaleDateString("en-ca")
  );
  const [departureDate, setDepartureDate] = useState(
    new Date().toLocaleDateString("en-ca")
  );

  const [note, setNote] = useState("");
  const [reminder, setReminder] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!firstName || !lastName) return;
    onAddReservation({ firstName, lastName });
    setFirstName("");
    setLastName("");
  };

  const classes = useStyles();

  const label = { inputProps: { "aria-label": "Switch demo" } };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleSetEmail = (value) => {
    if (!isValidEmail(value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }
    setEmail(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
        {/* Date of arrival*/}
        <FormControlLabel
          label={
            <Typography style={{ color: "grey" }}>Date of Arrival</Typography>
          }
          labelPlacement="top"
          control={
            <TextField
              value={arrivalDate}
              type="date"
              style={{ width: "180px" }}
              onChange={(e) =>
                setArrivalDate(
                  new Date(e.target.value).toLocaleDateString("en-ca")
                )
              }
            />
          }
          style={{ marginLeft: "0px", alignItems: "start" }}
        />

        {/* Date of Departure*/}
        <FormControlLabel
          label={
            <Typography style={{ color: "grey" }}>Date of Departure</Typography>
          }
          labelPlacement="top"
          control={
            <TextField
              value={departureDate}
              type="date"
              style={{ width: "180px" }}
              onChange={(e) =>
                setDepartureDate(
                  new Date(e.target.value).toLocaleDateString("en-ca")
                )
              }
            />
          }
          style={{ marginLeft: "0px", alignItems: "start" }}
        />
      </div>
      <br></br>
      {/* Room Size / Room Quantity */}

      <div className={classes.root}>
        <div style={{ width: "180px", marginTop: "10px" }}>
          <FormLabel>Room Size</FormLabel>
          <div>
            <FormControlLabel
              label=""
              labelPlacement="top"
              control={
                <Select
                  fullWidth
                  // ref={roomSizeRefEl}
                  value={roomSize}
                  style={{
                    width: "180px",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                  // onChange={(e) => setRoomSize(e.target.value)}
                >
                  <MenuItem selected value="business-suite">
                    business-suite
                  </MenuItem>
                  <MenuItem value="presidential-suite">
                    presidential-suite
                  </MenuItem>
                </Select>
              }
              style={{ marginLeft: "0px", alignItems: "start" }}
            ></FormControlLabel>
          </div>
        </div>

        <div>
          <div
            className={classes.root}
            style={{
              width: "180px",
              marginTop: "15px",
            }}
          >
            <FormLabel>Room Quantity</FormLabel>
          </div>
          <div>
            <div>
              <FormControlLabel
                labelPlacement="bottom"
                label={
                  <Typography style={{ color: "grey" }}>Maximum: 5</Typography>
                }
                control={
                  <TextField
                    style={{
                      width: "180px",

                      marginTop: "10px",
                      marginLeft: "0px",
                    }}
                    value={roomQuantity}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 5 } }}
                    onChange={(e) => setRoomQuantity(+e.target.value)}
                  />
                }
                style={{ alignItems: "end" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* First Name */}
      <div className={classes.root}>
        <FormLabel>First Name</FormLabel>
      </div>
      <div className={classes.root}>
        <FormControlLabel
          labelPlacement="bottom"
          control={
            <TextField
              value={firstName}
              error={firstName === ""}
              helperText={firstName === "" ? "Required" : ""}
              onChange={(e) => setFirstName(e.target.value)}
            />
          }
          style={{ marginLeft: "0px", alignItems: "end" }}
          label={firstName && `${firstName.length} / 25`}
        />
      </div>
      {/* Last Name */}
      <div className={classes.root}>
        <FormLabel>Last Name</FormLabel>
      </div>
      <div className={classes.root}>
        <FormControlLabel
          labelPlacement="bottom"
          control={
            <TextField
              value={lastName}
              error={lastName === ""}
              helperText={lastName === "" ? "Required" : ""}
              onChange={(e) => setLastName(e.target.value)}
            />
          }
          style={{ marginLeft: "0px", alignItems: "end" }}
          label={lastName && `${lastName.length} / 25`}
        />
      </div>
      {/* Email */}
      <div className={classes.root}>
        <FormLabel>E-mail</FormLabel>
      </div>
      <div className={classes.root}>
        <FormControlLabel
          control={
            <TextField
              value={email}
              type="email"
              onChange={(e) => handleSetEmail(e.target.value)}
              helperText={
                error
                  ? error && <span style={{ color: "red" }}>{error}</span>
                  : ""
              }
            />
          }
          style={{
            marginLeft: "0px",
          }}
          label=""
        />
      </div>
      {/* Phone Number */}
      <div style={{ marginTop: "10px" }} className={classes.root}>
        <FormLabel>Phone Number</FormLabel>
      </div>
      <div className={classes.root}>
        <FormControlLabel
          labelPlacement="bottom"
          control={
            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          }
          style={{ marginLeft: "0px", alignItems: "left" }}
          label={
            <Typography style={{ color: "grey", marginBottom: "20px" }}>
              Add your country code first
            </Typography>
          }
        />
      </div>
      {/* Street Name / Street Number */}
      <div className={classes.root}>
        <div>
          <FormControlLabel
            label={
              <Typography style={{ color: "grey" }}>Street Name</Typography>
            }
            labelPlacement="top"
            control={
              <TextField
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}
              />
            }
            style={{ marginLeft: "0px", alignItems: "start" }}
          />
        </div>

        <div>
          <FormControlLabel
            label={
              <Typography style={{ color: "grey" }}>Street Number</Typography>
            }
            labelPlacement="top"
            control={
              <TextField
                value={streetNumber}
                onChange={(e) => setStreetNumber(e.target.value)}
              />
            }
            style={{ marginLeft: "0px", alignItems: "start" }}
          />
        </div>
      </div>
      {/* ZIP /State / City */}
      <div className={classes.root}>
        <div>
          <FormControlLabel
            label={<Typography style={{ color: "grey" }}>Zip</Typography>}
            labelPlacement="top"
            control={
              <TextField
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            }
            style={{ marginLeft: "0px", alignItems: "start" }}
          />
        </div>
        <div>
          <FormControlLabel
            label={<Typography style={{ color: "grey" }}>State</Typography>}
            labelPlacement="top"
            control={<SelectState />}
            style={{ marginLeft: "0px", alignItems: "start" }}
          />
        </div>
        <div>
          <FormControlLabel
            label={<Typography style={{ color: "grey" }}>City</Typography>}
            labelPlacement="top"
            control={
              <TextField
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            }
            style={{ marginLeft: "0px", alignItems: "start" }}
          />
        </div>
      </div>
      {/* Payment */}
      <div className={classes.root}>
        <Payment />
      </div>
      {/* Personal Note */}
      <div className={classes.root}>
        <FormControlLabel
          label={
            <Typography style={{ color: "grey", marginTop: "10px" }}>
              Personal Note
            </Typography>
          }
          labelPlacement="top"
          control={<TextField value={note} onChange={(e) => e.target.value} />}
          style={{ marginLeft: "0px", alignItems: "start" }}
        />
      </div>
      {/* Tags */}
      <div className={classes.root}>
        {/* <Tags tags={booking.tags} setTags={setTags} /> */}
      </div>
      <Divider style={{ border: "10px" }} />
      {/* Switches */}
      <div className={classes.root}>
        <Switches />
      </div>
      <div className={classes.root}>
        <FormControlLabel
          control={
            <CheckBox
              color="default"
              onChange={(e) => setConfirm(e.target.checked)}
              inputProps={{
                "aria-label": "secondary checkbox",
              }}
            />
          }
          label="I confirm the information given above"
        />
      </div>
      <button>Add reservation</button>
    </form>
  );
}

export default FormAddReservation;
