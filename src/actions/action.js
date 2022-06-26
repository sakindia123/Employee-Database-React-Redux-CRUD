export const getEmployee = () => (dispatch) => {
  dispatch({
    type: "GET_EMPLOYEE",
  });
};

export const addEmployee = (data) => (dispatch) => {
  dispatch({
    type: "ADD_EMPLOYEE",
    payload: data,
  });
};

export const editEmployee = (data) => (dispatch) => {
  dispatch({
    type: "EDIT_EMPLOYEE",
    payload: data,
  });
};

export const deleteEmployee = (id) => (dispatch) => {
  dispatch({
    type: "DELETE_EMPLOYEE",
    payload: id,
  });
};
