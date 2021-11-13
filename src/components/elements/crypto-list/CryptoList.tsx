import React, { useState, useEffect } from "react";
import CrtypoListHeaders from "./CryptoListHeaders";
import { cryptoCurrencies } from "../../../models/cryptos";
import Spinner from "../spinner";
import api from "../../../lib/api";
import { formatNumber } from "../../../lib/helpers";

interface CryptoListProps {
  clickHandler: (
    ticker: string,
    fullName: string | null,
    currentPrice: string | null | number
  ) => void;
}

const CrytpoList: React.FC<CryptoListProps> = ({ clickHandler }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cryptoList, setCryptoList] = useState<any>();
  const [cryptos] = useState<ICryptoList>(cryptoCurrencies);

  useEffect(() => {
    const getApi = async () => {
      const _cryptoList: ICryptoList = { ...cryptos };
      const tickers = Object.keys(_cryptoList).map((key) => key);
      const data = await api.get(tickers);
      let objects = data?.DISPLAY;
      if (objects) {
        Object.keys(objects).forEach((key) => {
          const obj = objects[key].USD;
          if (_cryptoList.hasOwnProperty(key)) {
            _cryptoList[key] = {
              ..._cryptoList[key],
              ...{
                currentPrice: formatNumber(obj.PRICE, 2),
                change: obj.CHANGE24HOUR,
                marketCap: obj.MKTCAP,
              },
            };
          }
        });
      }
      setCryptoList(_cryptoList);
      setIsLoading(false);
    };
    getApi();
  }, [setIsLoading, setCryptoList, cryptos]);
  return (
    <React.Fragment>
      {isLoading && cryptoList !== null && typeof cryptoList !== undefined ? (
        <div className="table__loading">
          <div>Loading crypto data...</div>
          <div>
            <Spinner fill={"#0388fc"} />
          </div>
        </div>
      ) : (
        <div>
          <CrtypoListHeaders />
          {Object.keys(cryptoList).map((key: string) => {
            const _crypto: ICrypto = cryptoList[key];
            return (
              <div
                key={_crypto.ticker}
                className="row crypto__list"
                onClick={() =>
                  clickHandler(
                    _crypto.ticker,
                    _crypto.fullName,
                    _crypto.currentPrice
                  )
                }
              >
                <div className="row">
                  <div className="crypto__list_name_container">
                    <img
                      src={`./images/crypto-icons/${_crypto.ticker}.png`}
                      alt={_crypto.ticker}
                      className="crypto__list_icon"
                    />
                  </div>
                  <div className="crypto__list_name_container">
                    <div>{_crypto.fullName}</div>
                    <div>{_crypto.ticker}</div>
                  </div>
                </div>
                <div>{_crypto.currentPrice}</div>
                <div>{_crypto.change}</div>
                <div>{_crypto.marketCap}</div>
              </div>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default CrytpoList;
