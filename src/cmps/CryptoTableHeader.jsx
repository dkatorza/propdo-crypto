import { TableCell, TableHead, TableRow } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
export const CryptoTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>Name</TableCell>
        <TableCell align='right'>24H CHANGE</TableCell>
        <TableCell align='right'>PRICE</TableCell>
        <TableCell align='right'>PRICE IN BTC</TableCell>
        <TableCell align='right'>MARKET CAP</TableCell>
        <TableCell align='right'>VOLUME 24H</TableCell>
        <TableCell align='right'>PRICE GRAPH (7D)</TableCell>
        <TableCell align='center' style={{ justifyContent: 'center' }}>
          <MoreVertIcon
            style={{
              width: '24px',
            }}
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
