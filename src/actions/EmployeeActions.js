import { EMPLOYEE_UPDATE } from "./types";
import firebase from "firebase";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: "reset" });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase
      .database()
      .ref("/users/${currentUser.uid}/employees/${uid}")
      .set({ name, phone, shift })
      .then(() => console.log("saved!"));
  };
};
