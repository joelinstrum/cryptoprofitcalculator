import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import { formatNumber } from "../../../lib/helpers";
import api from "../../../lib/api";

interface HistoricPriceProps {
  cryptoTicker: string;
  cryptoName: string;
  cryptoPrice?: string | number | null | undefined;
  clickHandler: (item: string) => void;
}

const HistoricPrice: React.FC<HistoricPriceProps> = ({
  cryptoTicker,
  cryptoName,
  cryptoPrice,
  clickHandler,
}) => {
  const [value, setDateValue] = useState(new Date());
  const [historicPrice, setHistoricPrice] = useState<
    string | number | null | undefined
  >(formatNumber(cryptoPrice));
  const [hpClassname, setHpClassname] = useState("fadeIn");
  const [isLoading, setIsLoading] = useState(false);

  const setPrice = () => {
    let p = historicPrice ? historicPrice.toString() : "";
    clickHandler(p);
  };

  const changeHandler = (date: Date) => {
    if (cryptoPrice) {
      setHpClassname("fadeOut");
      setTimeout(() => {
        setDateValue(date);
        setIsLoading(true);
      }, 200);
    }
  };

  useEffect(() => {
    const getItem = async () => {
      const timestamp = (value.getTime() / 1000).toString();
      const data = await api.fetchItem(cryptoTicker, timestamp);
      const price = data[cryptoTicker.toUpperCase()].USD;
      setHistoricPrice(formatNumber(price));
      setIsLoading(false);
      setHpClassname("fadeIn");
    };
    if (isLoading) {
      getItem();
    }
  }, [isLoading, cryptoTicker, value, setIsLoading, setHpClassname]);

  return (
    <div className="historic__modal">
      <div
        className="padding__top_5 padding__left_5"
        style={{ float: "right" }}
      >
        <img
          src={`./images/crypto-icons/${cryptoTicker}.png`}
          alt={cryptoName}
          className="crypto__image"
        />
        <span>
          {cryptoName} - {cryptoTicker}
        </span>
        {historicPrice && (
          <span
            className={`historic__modal_displayDate ${hpClassname} link3`}
            onClick={setPrice}
          >
            ${historicPrice}
          </span>
        )}
      </div>
      <div>
        <div>
          <DatePicker
            onChange={changeHandler}
            value={value}
            autoFocus={true}
            isOpen={true}
            maxDate={new Date()}
            closeCalendar={false}
          />

          <div className="historic__display_price">
            {isLoading ? (
              <div>Loading</div>
            ) : (
              <React.Fragment>
                {historicPrice && (
                  <div>
                    <div>
                      Price of ${cryptoName} on (some date): {historicPrice}
                    </div>
                    <div
                      className={`historic__displayPrice ${hpClassname} link3`}
                      onClick={setPrice}
                      style={{ fontWeight: "bold" }}
                    >
                      Click to use this sell point
                    </div>
                  </div>
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricPrice;
