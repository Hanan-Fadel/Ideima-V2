import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function Payment() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="creditCard"
          control={<Radio />}
          label="Credit Card"
          checked
        />
        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
        <FormControlLabel value="cash" control={<Radio />} label="Cash" />
        <FormControlLabel
          value="bitcouin"
          control={<Radio />}
          label="Bitcoin"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default Payment;
