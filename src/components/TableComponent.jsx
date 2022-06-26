import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
} from "../actions/action";
import {
  Button,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      employeeName: "",
      employeeDepartment: "",
    };
  }

  static propTypes = {
    employees: PropTypes.array.isRequired,
    getEmployee: PropTypes.func.isRequired,
    addEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEmployee();
  }

  submitData = () => {
    if (
      this.state.employeeName &&
      this.state.employeeDepartment &&
      !this.state.id
    ) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        employeeName: this.state.employeeName,
        employeeDepartment: this.state.employeeDepartment,
      };

      this.props.addEmployee(newEmployee);
    } else if (
      this.state.employeeName &&
      this.state.employeeDepartment &&
      this.state.id
    ) {
      const updatedDetails = {
        id: this.state.id,
        employeeName: this.state.employeeName,
        employeeDepartment: this.state.employeeDepartment,
      };

      this.props.editEmployee(updatedDetails);
    } else {
      alert("Enter Employee Details.");
    }
    this.clearData();
  };

  editDetails = (data) => {
    this.setState({
      id: data.id,
      employeeName: data.employeeName,
      employeeDepartment: data.employeeDepartment,
    });
  };

  deleteEmployee = (id) => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteEmployee(id);
    }
  };

  handleNameChange = (e) => {
    this.setState({
      employeeName: e.target.value,
    });
  };

  handleDepartmentChange = (e) => {
    this.setState({
      employeeDepartment: e.target.value,
    });
  };

  clearData = () => {
    this.setState({
      id: 0,
      employeeName: "",
      employeeDepartment: "",
    });
  };

  render() {
    return (
      <>
        <div className="leftsection">
          <Typography>Employee Name: </Typography>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={this.handleNameChange}
            value={this.state.employeeName}
            sx={{ marginBottom: "1rem" }}
            type="text"
          />
          <Typography>Employee Department: </Typography>
          <TextField
            id="outlined-basic"
            label="Department"
            variant="outlined"
            onChange={this.handleDepartmentChange}
            value={this.state.employeeDepartment}
            sx={{ marginBottom: "1rem" }}
            type="text"
          />
          <br />
          {this.state.id ? (
            <Button
              onClick={this.submitData}
              variant="contained"
              color="success"
              sx={{ marginTop: "1rem" }}
            >
              UPDATE
            </Button>
          ) : (
            <Button
              onClick={this.submitData}
              variant="contained"
              color="success"
              sx={{ marginTop: "1rem" }}
            >
              ADD
            </Button>
          )}
          <Button
            onClick={this.clearData}
            variant="contained"
            color="success"
            sx={{ marginLeft: "2rem", marginTop: "1rem" }}
          >
            CLEAR
          </Button>
        </div>

        <TableContainer
          sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        >
          <Table sx={{ maxWidth: 900 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Department</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.props.employees &&
                this.props.employees.map((data, index) => {
                  return (
                    <React.Fragment key={index}>
                      <TableRow>
                        <TableCell align="center">{index + 1}</TableCell>

                        <TableCell align="center">
                          {data.employeeName}
                        </TableCell>

                        <TableCell align="center">
                          {data.employeeDepartment}
                        </TableCell>

                        <TableCell align="center">
                          <Button
                            onClick={() => this.editDetails(data)}
                            variant="contained"
                            color="success"
                          >
                            Edit
                          </Button>

                          <Button
                            onClick={() => this.deleteEmployee(data.id)}
                            variant="contained"
                            color="error"
                            sx={{ marginLeft: "2rem" }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees,
});

const mapDispatchToProps = () => ({
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
});

export default connect(mapStateToProps, mapDispatchToProps())(TableComponent);
