const initialstate = {
  employees: [
    { id: 1, employeeName: "Sarthak", employeeDepartment: "ReactJS Team" },
    { id: 2, employeeName: "Aman", employeeDepartment: "NodeJS Team" },
    { id: 3, employeeName: "Ashish", employeeDepartment: "UI/UX Team" },
  ],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_EMPLOYEE":
      return {
        ...state,
      };
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.concat(action.payload),
      };
    case "EDIT_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.map((content) =>
          content.id === action.payload.id
            ? {
                ...content,
                employeeName: action.payload.employeeName,
                employeeDepartment: action.payload.employeeDepartment,
              }
            : content
        ),
      };
    case "DELETE_EMPLOYEE":
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
