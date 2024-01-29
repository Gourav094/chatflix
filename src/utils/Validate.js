export const validateData = (email,password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid) return "Email is not valid";
    if(!ispassValid) return "Please should include atleast one lowercase,one uppercase, one number and should be 8 digit"
    return null;
}