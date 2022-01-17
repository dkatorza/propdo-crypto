import { TableCell, TableHead, TableRow } from '@mui/material';

export const CryptoTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align='right'>24H CHANGE</TableCell>
        <TableCell align='right'>PRICE</TableCell>
        <TableCell align='right'>PRICE IN BTC</TableCell>
        <TableCell align='right'>MARKET CAP</TableCell>
        <TableCell align='right'>VOLUME 24H</TableCell>
        <TableCell align='right'>PRICE GRAPH (7D)</TableCell>
        <TableCell align='right'>ACTIONS</TableCell>
      </TableRow>
    </TableHead>
  );
};
