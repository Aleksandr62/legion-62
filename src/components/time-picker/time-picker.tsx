import {useState} from "react";
import styles from './time-picker.module.css'

interface IProps {
    date: any,
    min: string,
    max: string,
    step: number,
    readonly: boolean
}

const isDigit = (time: string): boolean => {
    return /^\d?\d?:?\d?\d?$/.test(time)
}

const selectTimeArray = (step: number, date: any, min: string, max: string): object => {
    let arr = []
    const minTime: Date = new Date(date.setHours(parseInt(min.slice(0, 2)), parseInt(min.slice(3, 5)), 0, 0))
    const maxTime: Date = new Date(date.setHours(parseInt(max.slice(0, 2)), parseInt(max.slice(3, 5)), 0, 0))

    while (maxTime >= minTime) {
        arr = [...arr, maxTime.toLocaleString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit'
        })]
        maxTime.setMilliseconds(-step * 60 * 1000)
    }
    return arr.reverse()
}

const TimePicker = (props: IProps) => {
    const {
        step = 60,
        date = new Date(),
        min = "08:00",
        max = "18:00",
        ...rest
    } = {...props}
console.log('TimePicker', step, date, min, max)
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    const array: any = selectTimeArray(step, date, min, max)

    const handleChange = (time) => () => {
        setValue(time)
        setOpen(false)
    }

    const handleClick = () => {
        setOpen(!open)
    }

    return <div className={styles.timeBox}>
        <input className={styles.timeInput}
            type="text" value={value}
               onClick={handleClick}/>
        {open && (<div className={styles.selectTime}>
            {array.map((item, idx) => (
                <div key={idx} className={styles.selectTimeItem}
                     onClick={handleChange(item)}>{item}</div>))}
        </div>)}
    </div>
}

export {TimePicker}