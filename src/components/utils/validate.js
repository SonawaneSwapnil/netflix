///validation form
export const checkValidation = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  if (!isEmailValid) return "email id is not valid";
  if (!isPasswordValid) return "password is not valid";
  if (isNameValid) return "enter valid name";
  return null;
};
