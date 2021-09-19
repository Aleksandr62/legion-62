import { useEffect, useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { TimePicker } from "../time-picker";
import styles from "./date-time-picker.module.css";

const calendar = {
  stepRecording: 60, // 60 минут
  startTime: "08:00",
  endTime: "17:00"
};

export const DateTimePicker = () => {
  const [inputDate, setInputDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleString("en-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    })
  );

  const [open, setOpen] = useState(false);

  const minDate = new Date(); // поправить на выбор из БД

  useEffect(() => {
    setSelectedDate(
      inputDate.toLocaleString("en-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })
    );
    console.log("handleDateChange - ", inputDate);
    setOpen(false);
  }, [setSelectedDate, setOpen, inputDate]);

  const handleSetTime = (time) => {
    const date = new Date(selectedDate);
    date.setHours(
      parseInt(time.slice(0, 2), 10),
      parseInt(time.slice(3, 5), 10),
      0,
      0
    );
    console.log("date - time", date);

    console.log("selectedDate - time", selectedDate);
    /* setOpen(false); */
  };

  console.log("re-render DateTimePicker at ", Date.now());

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          open={open}
          onClose={() => setOpen(false)}
          onClick={() => setOpen(true)}
          disableToolbar
          variant="inline"
          label="Записаться на:"
          InputLabelProps={{
            shrink: true
          }}
          value={inputDate}
          onChange={(date) => setInputDate(date)}
          minDate={minDate}
          maxDate={new Date("2021-09-20")}
          onError={console.log}
          format="dd-MM-yyyy"
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </MuiPickersUtilsProvider>
      <TimePicker
        date={selectedDate}
        min={calendar.startTime}
        max={calendar.endTime}
        step={calendar.stepRecording}
        label="Время:"
        setTime={handleSetTime}
      />
    </div>
  );
};
