import { TableCell, TableRow } from '@mui/material';

export const CryptoTablePreview = ({ coin }) => {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component='th' scope='row'>
        <img src={coin.icon} />
        {coin.name}
        {coin.symbol}
      </TableCell>
      <TableCell align='right'>{coin.priceChange1d}</TableCell>
      <TableCell align='right'>{coin.price}</TableCell>
      <TableCell align='right'>{coin.priceBtc}</TableCell>
      <TableCell align='right'>{coin.marketCap}</TableCell>
      <TableCell align='right'>{coin.volume}</TableCell>
      <TableCell align='right'>{coin.volume}</TableCell>
      <TableCell align='right'>{coin.volume}</TableCell>
    </TableRow>
  );
};
