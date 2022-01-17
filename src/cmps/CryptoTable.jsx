import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import axios from 'axios';
import { CryptoTableHeader } from './CryptoTableHeader';
import { CryptoTablePreview } from './CryptoTablePreview';

export const CryptoTable = () => {
  useEffect(() => {
    fetchCoins();
  }, []);

  const [coins, setCoins] = useState('');

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
    <Container style={{ textAlign: 'center', width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <CryptoTableHeader />
          <TableBody>
            {coins &&
              coins.map((coin, idx) => (
                <CryptoTablePreview key={idx} coin={coin} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
