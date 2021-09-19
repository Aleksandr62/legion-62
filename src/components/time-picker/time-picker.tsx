import { useCallback, useEffect, useState } from "react";
import styles from "./time-picker.module.css";

interface IProps {
  date: any;
  min: string;
  max: string;
  step: number;
  setTime: (props) => {};
  readonly: boolean;
}

const selectTimeArray = (
  step: number,
  date: any,
  min: string,
  max: string
): object => {
  let arr = [];

  const minTime: Date = new Date(date);
  minTime.setHours(
    parseInt(min.slice(0, 2), 10),
    parseInt(min.slice(3, 5), 10),
    0,
    0
  );
  const maxTime: Date = new Date(date);
  maxTime.setHours(
    parseInt(max.slice(0, 2), 10),
    parseInt(max.slice(3, 5), 10),
    0,
    0
  );

  while (maxTime >= minTime) {
    arr = [
      ...arr,
      new Date(maxTime).toLocaleString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit"
      })
    ];
    maxTime.setMilliseconds(-step * 60 * 1000);
  }
  return arr.reverse();
};

const TimePicker = (props: IProps) => {
  const {
    step = 60,
    date,
    min = "08:00",
    max = "18:00",
    label = "Time:",
    setTime,
    ...rest
  } = { ...props };

  const [open, setOpen] = useState(false);

  const array: any = selectTimeArray(step, date, min, max);

  const [value, setValue] = useState(array[0]);

  const handleChangeTime = useCallback(
    (dateTime) => () => {
      setValue(dateTime);
      setOpen(false);
    },
    [setValue, setOpen]
  );

  useEffect(() => {
    setTime(value);
  }, [value, setTime]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.timeBox}>
      <label className={styles.timeInputLabel}>{label}</label>
      <div className={styles.timeInputBox}>
        <input
          className={styles.timeInput}
          type="text"
          value={value.toLocaleString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit"
          })}
          onClick={handleClick}
          readOnly
        />
        <span className={styles.timeInputAdornment} onClick={handleClick}>
          &#128344;
        </span>
        {open && (
          <div className={styles.timeInputSelect}>
            {array.map((item, idx) => (
              <div
                className={styles.timeInputSelectItem}
                key={idx}
                onClick={handleChangeTime(item)}
              >
                <span className={styles.timeInputSelectHM}>
                  {item.slice(0, 2)}
                </span>
                <span className={styles.timeInputSelectDivider}>:</span>
                <span className={styles.timeInputSelectHM}>
                  {item.slice(3, 5)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { TimePicker };
