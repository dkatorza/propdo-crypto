import { TableCell, TableRow } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const CryptoTablePreview = ({ coin, lineNumber }) => {
  return (
    <TableRow className='pointer'>
      <TableCell>{lineNumber + 1}</TableCell>
      <TableCell component='th' scope='row'>
        <div className='name-cell-wrapper'>
          <img className='imgs' src={coin.icon} />
          <span>{coin.name}</span>
          <span>&#xB7;</span>
          <span>{coin.symbol}</span>
        </div>
      </TableCell>
      <TableCell align='right'>{coin.priceChange1d}%</TableCell>
      <TableCell align='right'>{coin.price}</TableCell>
      <TableCell align='right'>{coin.priceBtc}</TableCell>
      <TableCell align='right'>{coin.marketCap}</TableCell>
      <TableCell align='right'>{coin.volume}</TableCell>
      <TableCell align='right'>{coin.volume}</TableCell>
      <TableCell align='center'>
        <MoreHorizIcon />
      </TableCell>
    </TableRow>
  );
};
