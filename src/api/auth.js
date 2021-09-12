export const get = (url, email, password) => {
  if (email === "vasya@bk.ru")
    return {
      data: {
        name: "Vasya",
        email: "vasya@bk.ru",
        role: "admin"
      }
    };
};
export const post = (url) => {
  return { data: [] };
};
