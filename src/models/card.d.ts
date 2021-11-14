interface ICard {
  id: string;
  cryptoName: string;
  cryptoTicker: string;
  cryptoPrice: string | null | number;
  purchasePrice: string | null | number;
  purchaseSource: "current" | "historic" | "custom" | "";
  purchaseDate: string | null;
  sellPrice: string | null | number;
  sellSource: "current" | "historic" | "custom" | "";
  sellDate: string | null;
  investment: string | null | number;
  coins: string | null | number;
  investmentType: string | null;
  coins: string | null | number;
}
