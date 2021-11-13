interface ICrypto {
  fullName: string | null | null;
  currentPrice: string | number | null;
  ticker: string;
  marketCap: string | number | null;
  change: string | number | null;
}

interface ICryptoList {
  [key: string]: ICrypto;
}
