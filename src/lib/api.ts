const apiUrl = "https://min-api.cryptocompare.com/data";
export const apiKey =
  "99aaa4bb27142e523129deada04160b07969ece51d99f154f9b1dc1befaa73c9";

const api = {
  get: async (tickers: string[]) => {
    let tickersString = tickers.join(",");
    const endpoint = `${apiUrl}/pricemultifull?fsyms=${tickersString}&tsyms=USD&extraParams=CryptoCalculator&ts=1605549600`;
    const headers: object = {
      "Content-Type": "application-json",
    };
    return fetch(endpoint, headers)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error: string) => {
        return { error };
      });
  },
  fetchItem: async (ticker: string, timestamp?: string) => {
    const endpoint = timestamp
      ? `${apiUrl}/pricehistorical?fsym=${ticker.toUpperCase()}&tsyms=USD&ts=${timestamp}&extraParams=CryptoCalculator`
      : `${apiUrl}/price?fsym=${ticker.toUpperCase()}&tsyms=USD&extraParams=CryptoCalculator`;
    const headers: object = {
      "Content-Type": "application-json",
    };
    return fetch(endpoint, headers)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        return { error };
      });
  },
};

export default api;
