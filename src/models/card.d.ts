interface ICard {
  id: string;
  cryptoName: string;
  cryptoTicker: string;
  cryptoPrice: string | null | number;
  purchasePrice: string | null | number;
  purchaseSource: "current" | "historic" | "custom" | "";
  sellPrice: string | null | number;
  sellSource: "current" | "historic" | "custom" | "";
  investment: string | null | number;
  coins: string | null | number;
  investmentType: string | null;
  coins: string | null | number;
}
