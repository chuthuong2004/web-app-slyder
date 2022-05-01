import "./table.scss";
import {useSelector} from "react-redux"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {

  const useList = useSelector((state) => state.users.users?.allUsers)
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Username</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {useList?.map((users) => (
            <TableRow key={users.id}>
              <TableCell className="tableCell">{users._id}</TableCell>
              {/* <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={users.img} alt="" className="image" />
                  {users.product}
                </div>
              </TableCell> */}
              <TableCell className="tableCell">{users.username}</TableCell>
              <TableCell className="tableCell">{users.date}</TableCell>
              <TableCell className="tableCell">{users.amount}</TableCell>
              <TableCell className="tableCell">{users.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${users.status}`}>{users.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;