import React, { useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const columns = [
  { id: "no", label: "No", minWidth: 20 },
  { id: "nama", label: "Nama", minWidth: 100 },
  {
    id: "jenisKelamin",
    label: "Jenis Kelamin",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "alamat",
    label: "Alamat",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "aksi",
    label: "Aksi",
    minWidth: 170,
  },
];

function Lone() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [value, setValue] = useState("female");

  const handleChangeRadio = (event) => {
    setDataInput((prev) => ({
      ...prev,
      jenisKelamin: event.target.value,
    }));
  };

  const [dataWarga, setDataWarga] = useState([]);
  const [dataInput, setDataInput] = useState({
    nama: "",
    jenisKelamin: "",
    alamat: "",
  });
  const [editIndex, setEditIndex] = useState(undefined);

  const handleInputNama = (e) => {
    setDataInput((prev) => ({
      ...prev,
      nama: e.target.value,
    }));
  };
  // const handleInputKelamin = (e) => {
  //   setDataInput((prev) => ({
  //     ...prev,
  //     jenisKelamin: e.target.value,
  //   }));
  // };

  const handleInputAlamat = (e) => {
    setDataInput((prev) => ({
      ...prev,
      alamat: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("submit clicked!");
    if (editIndex !== undefined) {
      setDataWarga((prev) => {
        let editData = prev;

        editData[editIndex] = dataInput;
        return editData;
      });
    } else {
      setDataWarga((prev) => [...prev, dataInput]);
    }
    setDataInput({ nama: "", jenisKelamin: "", alamat: "" });
    setEditIndex(undefined);
    e.preventDefault();
  };

  const handleEdit = (e) => {
    console.log("editing");
    setEditIndex(e);
    setDataInput(dataWarga[e]);
  };
  const handleDel = (e) => {
    console.log("deleted!");
    setDataWarga((prev) => prev.filter((item, i) => i !== e));
  };

  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <form
            style={{
              display: "flex",
              gap: 20,
              marginBottom: "2rem"
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Nama"
              value={dataInput.nama}
              onChange={handleInputNama}
            />
            {/* <TextField
              label="Jenis Kelamin"
              value={dataInput.jenisKelamin}
              onChange={handleInputKelamin}
            /> */}
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label"> Gender</FormLabel>
              <RadioGroup
                row={true}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={dataInput.jenisKelamin}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="Wanita"
                  control={<Radio />}
                  label="Wanita"
                />
                <FormControlLabel
                  value="Laki-Laki"
                  control={<Radio />}
                  label="Laki-Laki"
                />
              </RadioGroup>
            </FormControl>

            <TextField
              label="Alamat"
              value={dataInput.alamat}
              onChange={handleInputAlamat}
            />
            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    style={{
                      backgroundColor: column % 2 === 0 ? "white" : "#DBDBDB",
                      minWidth: column.minWidth,
                    }}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataWarga
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow
                      style={{
                        backgroundColor: i % 2 === 0 ? "white" : "#DBDBDB",
                      }}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={i}
                    >
                      {columns
                        .filter((item) => item.id !== "aksi")
                        .map((column) => {
                          const value =
                            column.id === "no" ? i + 1 : row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      <TableCell key={"aksi"} style={{ minWidth: 200 }}>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() => handleEdit(i)}
                        >
                          Edit
                        </Button>{" "}
                        &nbsp;
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => handleDel(i)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={dataWarga.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default Lone;
