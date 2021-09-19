import { useState, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import styles from "./login-comp.module.css";

const regExp = {
  email: /.+@.+\..+/,
  password: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,15}$/
};

export const LoginComp = ({ hide, btnCancel, btnConfirm, handleConfirm }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    isValide: false
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false
  });

  const handleChangeEmail = (e) => {
    setValues({
      ...values,
      email: e.target.value
    });
  };
  const handleChangePassword = (e) => {
    setValues({
      ...values,
      password: e.target.value
    });
  };

  useEffect(() => {
    setErrors((state) => {
      return {
        ...state,
        password: values.password
          ? !regExp.password.test(values.password)
          : false,
        email: values.email ? !regExp.email.test(values.email) : false
      };
    });
  }, [values]);

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const onKeydown = ({ key }) => {
    switch (key) {
      case "Escape":
        hide();
        break;
      case "Enter":
        handleClickConfirm();
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  const handleClickConfirm = () => {
    handleConfirm(values);
  };

  return (
    <div className={styles.loginBox}>
      <TextField
        autoFocus
        error={errors.email}
        required
        fullWidth
        label="Email:"
        type="email"
        value={values.email}
        onChange={handleChangeEmail}
      />
      <TextField
        id="standard-adornment-password"
        error={errors.password}
        helperText={
          (errors.password && (
            <i>мин. заглавная, прописная, сп/символ и цифра</i>
          )) || <i>от 8 до 15 символов</i>
        }
        title="мин. одна заглавная, прописная, спецсимвол и цифра"
        required
        fullWidth
        label="Пароль:"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChangePassword}
        InputProps={{
          maxlength: 15,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                /*               onMouseDown={handleMouseDownPassword} */
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <div className={styles.actions}>
        {btnCancel && <Button onClick={hide}>{btnCancel}</Button>}
        {btnConfirm && (
          <Button
            onClick={handleClickConfirm}
            disabled={
              errors.email ||
              errors.password ||
              !values.email ||
              !values.password
            }
          >
            {btnConfirm}
          </Button>
        )}
      </div>
    </div>
  );
};
