import { TableCell, TableHead, TableRow } from '@mui/material';

export const CryptoTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>Name</TableCell>
        <TableCell align='center'>24H CHANGE</TableCell>
        <TableCell align='center'>PRICE</TableCell>
        <TableCell align='center'>PRICE IN BTC</TableCell>
        <TableCell align='center'>MARKET CAP</TableCell>
        <TableCell align='center'>VOLUME 24H</TableCell>
        <TableCell align='center'>PRICE GRAPH (7D)</TableCell>
        <TableCell align='center'>ACTIONS</TableCell>
      </TableRow>
    </TableHead>
  );
};
