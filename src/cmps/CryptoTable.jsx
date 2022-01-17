import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { CryptoTableHeader } from './CryptoTableHeader';
import { CryptoTablePreview } from './CryptoTablePreview';
import { TablePagination } from '@mui/material';

export const CryptoTable = () => {
  useEffect(() => {
    fetchCoins();
  }, []);

  const [coins, setCoins] = useState('');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const fetchCoins = async () => {
    try {
      const {
        data: { coins },
      } = await axios.get(
        'https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=AMD'
      );
      setCoins(coins);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <CryptoTableHeader />
          <TableBody>
            {coins &&
              coins
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((coin, idx) => (
                  <CryptoTablePreview key={idx} coin={coin} lineNumber={idx} />
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 100, 300]}
        count={coins.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
