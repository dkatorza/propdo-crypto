import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { CryptoTableHeader } from './CryptoTableHeader';
import { CryptoTablePreview } from './CryptoTablePreview';

export const CryptoTable = () => {
  useEffect(() => {
    fetchCoins();
  }, []);

  const [coins, setCoins] = useState('');
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const fetchCoins = async () => {
    try {
      const {
        data: { coins },
      } = await axios.get(
        'https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=AMD'
      );
      console.log(coins);
      setCoins(coins);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <CryptoTableHeader />
          <TableBody>
            {coins &&
              coins.map((coin, idx) => (
                <CryptoTablePreview key={idx} coin={coin} lineNumber={idx} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        colSpan={3}
        count={coins.length}
        rowsPerPage={10}
        page={1}
        SelectProps={{
          inputProps: {
            'aria-label': 'rows per page',
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </>
  );
};
