import React, { useContext, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { CryptoTableHeader } from './CryptoTableHeader';
import { CryptoTablePreview } from './CryptoTablePreview';
import { TablePagination } from '@mui/material';
import { GlobalContext } from '../context/GlobalState';

export const CryptoTable = () => {
  const { loadCoins } = useContext(GlobalContext);
  const { coins } = useContext(GlobalContext);

  useEffect(() => {
    loadCoins();
  }, []);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!coins) return <div>loading...</div>;
  return (
    <>
      <TableContainer component={Paper} className='scroller'>
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
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
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
