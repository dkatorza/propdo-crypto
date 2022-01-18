import axios from 'axios';

export const coinsService = {
  query,
};

async function query() {
  try {
    return await axios.get(
      'https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=AMD'
    );
  } catch (err) {
    console.log(err);
  }
}
