import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  code: string,
  name: string,

  status: string
) {
  return { code, name, status };
}

const rows = [
  {
    code: 1,
    name: "John Doe",

    status: "✅",
  },
  {
    code: 2,
    name: "John Doe",

    status: "✅",
  },
  {
    code: 3,
    name: "John Doe",

    status: "❌",
  },
  {
    code: 4,
    name: "John Doe",

    status: "❌",
  },
  {
    code: 5,
    name: "John Doe",

    status: "✅",
  },
  {
    code: 6,
    name: "John Doe",

    status: "❌",
  },
  {
    code: 7,
    name: "John Doe",

    status: "✅",
  },
  {
    code: 8,
    name: "John Doe",

    status: "✅",
  },
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "90%", margin: "50px " }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Employee Code</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Name
            </TableCell>

            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Is Active
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>

              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
