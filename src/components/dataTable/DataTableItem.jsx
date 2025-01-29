import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  { icode: 1, iname: "Item A", categoryCode: "CAT01", price: "$10" },
  { icode: 2, iname: "Item B", categoryCode: "CAT02", price: "$20" },
  { icode: 3, iname: "Item C", categoryCode: "CAT03", price: "$30" },
  { icode: 4, iname: "Item D", categoryCode: "CAT04", price: "$40" },
  { icode: 5, iname: "Item E", categoryCode: "CAT05", price: "$50" },
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "90%", margin: "50px" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Item Code</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Item Name
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Category Code
            </TableCell>
            <TableCell align="right" style={{ fontWeight: "bold" }}>
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.icode}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.icode}
              </TableCell>
              <TableCell align="right">{row.iname}</TableCell>
              <TableCell align="right">{row.categoryCode}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// function createData(
//   icode: string,
//   iname: string,
//   categoryCode: string,
//   price: string
// ) {
//   return { code, name, email, position, status };
// }

// const rows = [
//   {
//     code: 1,
//     name: "John Doe",
//     email: "john@example.com",
//     position: "jjjj",
//     status: "✅",
//   },
//   {
//     code: 2,
//     name: "John Doe",
//     email: "john@example.com",
//     position: "jjjj",
//     status: "✅",
//   },
//   {
//     code: 3,
//     name: "John Doe",
//     email: "john@example.com",
//     position: "jjjj",
//     status: "❌",
//   },
//   {
//     code: 4,
//     name: "John Doe",
//     email: "john@example.com",
//     position: "jjjj",
//     status: "❌",
//   },
//   {
//     code: 5,
//     name: "John Doe",
//     email: "john@example.com",
//     position: "jjjj",
//     status: "✅",
//   },
//   {
//     code: 6,
//     name: "John Doe",
//     email: "john@example.com",
//     position: "jjjj",
//     status: "❌",
//   },
//   {
//     code: 7,
//     name: "John Doe",
//     email: "john@example.com",
//     position: "jjjj",
//     status: "✅",
//   },
//   {
//     code: 8,
//     name: "John Doe",
//     email: "john@example.com",
//     position: "jjjj",
//     status: "✅",
//   },
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer
//       component={Paper}
//       style={{ maxWidth: "90%", margin: "50px " }}
//     >
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell style={{ fontWeight: "bold" }}>Item Code</TableCell>
//             <TableCell align="right" style={{ fontWeight: "bold" }}>
//               Item Name
//             </TableCell>
//             <TableCell align="right" style={{ fontWeight: "bold" }}>
//               Category Code
//             </TableCell>
//             <TableCell align="right" style={{ fontWeight: "bold" }}>
//               Price
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.code}
//               </TableCell>
//               <TableCell align="right">{row.icode}</TableCell>
//               <TableCell align="right">{row.iname}</TableCell>
//               <TableCell align="right">{row.categoryCode}</TableCell>
//               <TableCell align="right">{row.price}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
