import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDateTimePicker,
  KeyboardDatePicker,
  TimePicker,
} from "@material-ui/pickers";
import styles from "./date-time-picker.module.css";

export const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setOpen(false);
  };
  const handleTimeChange = (time) => {
    console.log(time);
    /*     setSelectedDate(date); */
    /* setOpen(false); */
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        open={open}
        onClick={() => setOpen(true)}
        disableToolbar
        variant="inline"
        ampm={false}
        label="Записаться на:"
        InputLabelProps={{
          shrink: true,
        }}
        value={selectedDate}
        onChange={handleDateChange}
        minDate={new Date("2021-09-05")}
        maxDate={new Date("2021-09-20")}
        /*         minutesStep={30} */
        onError={console.log}
        /*         format="dd-MM-yyyy HH:mm" */
        format="dd-MM-yyyy"
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
      <TextField
        id="time"
        label="Время:"
        type="time"
        /*         value={selectedTime} */
        onChange={handleTimeChange}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 3600, // 1 hour
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
