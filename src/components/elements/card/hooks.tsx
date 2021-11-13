import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import api from "../../../lib/api";
import { formatNumber } from "../../../lib/helpers";
import CardsContext from "../../../lib/card-context";

export const usePrice = (
  ticker: string | null,
  currentPrice: string | number | null,
  purchaseSource: string | null
) => {
  const [price, setPrice] = useState(currentPrice);
  let timerRef: any = React.useRef(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await api.fetchItem(ticker!);
      const price = data.USD;
      setPrice(price);
      timerRef.current = setTimeout(() => {
        if (purchaseSource === "current") {
          fetchItem();
        }
      }, 10000);
    };
    if (ticker && purchaseSource === "current") {
      fetchItem();
    } else {
      window.clearTimeout(timerRef.current);
    }
    return () => {
      window.clearTimeout(timerRef.current);
    };
  }, [ticker, purchaseSource, currentPrice]);

  return { price, setPrice };
};

export const useRadioHandler = (
  radioOption: string,
  price: string | number | null,
  setPrice: Dispatch<SetStateAction<string | number | null>>,
  customPurchase: any,
  cryptoPrice: string | number | null,
  id: string
) => {
  const { updateCardHandler } = React.useContext(CardsContext);
  useEffect(() => {
    switch (radioOption) {
      case "current":
        updateCardHandler(id, {
          purchaseSource: "current",
          purchasePrice: cryptoPrice,
        });
        break;

      case "custom":
        setPrice(formatNumber(customPurchase));
        updateCardHandler(id, {
          purchaseSource: "custom",
          purchasePrice: customPurchase,
        });
        break;

      case "historic":
        break;

      default:
        setPrice(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioOption, price, customPurchase, cryptoPrice, id]);

  return {
    radioOption,
    price,
    customPurchase,
  };
};

export const useSellRadioHandler = (
  radioOption: string,
  price: string | number | null,
  setPrice: Dispatch<SetStateAction<string | number | null>>,
  customSell: any,
  cryptoPrice: string | number | null,
  id: string
) => {
  const { updateCardHandler } = React.useContext(CardsContext);
  useEffect(() => {
    switch (radioOption) {
      case "current":
        updateCardHandler(id, {
          purchaseSource: "current",
          sellPrice: cryptoPrice,
        });
        break;

      case "custom":
        setPrice(formatNumber(customSell));
        updateCardHandler(id, {
          purchaseSource: "custom",
          sellPrice: customSell,
        });
        break;

      case "historic":
        break;

      default:
        setPrice(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioOption, price, customSell, cryptoPrice, id]);

  return {
    radioOption,
    price,
    customPurchase: customSell,
  };
};
