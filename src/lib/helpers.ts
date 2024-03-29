import { defaultCard } from "../models/default-card";

export const initialCards: ICard[] = [defaultCard];

export const formatNumber = (
  arg: string | number | null | undefined,
  maxDecimals?: number
) => {
  let s = arg?.toString();
  let retval;
  if (s) {
    if (s === ".") {
      return s;
    }
    const endsInDecimal = s[s.length - 1] === ".";
    let numberArray = s.split(".");
    let preDecimal = numberArray[0].replaceAll(/[^0-9-]/g, "");
    let postDecimal = numberArray.length > 1 ? numberArray[1] : "";
    let max = maxDecimals || postDecimal.length;
    if (maxDecimals && postDecimal.length > max) {
      postDecimal = postDecimal.substring(0, max);
    }
    if (postDecimal) {
      postDecimal = "." + postDecimal;
    }
    if (endsInDecimal) {
      postDecimal = ".";
    }
    if (preDecimal) {
      preDecimal = parseInt(preDecimal, 10).toLocaleString("en-US");
      retval = preDecimal + postDecimal;
    } else {
      retval = postDecimal;
    }
  } else {
    retval = "";
  }
  if (retval === "NaN") {
    return "";
  }
  return retval;
};

export const formatNet = (
  initialInvestment: string | number | null,
  totalReturn: string | number | null
) => {
  if (initialInvestment && totalReturn) {
    let i = parseFloat(initialInvestment.toString().replaceAll(/[^0-9.]/g, ""));
    let t = parseFloat(totalReturn.toString().replaceAll(/[^0-9.]/g, ""));
    return (t - i).toFixed(2);
  }
  return null;
};

export const toInt = (s: any, d?: number): any => {
  if (s) {
    let _str = s.toString().replaceAll(/[^0-9.]/gi, "");
    if (d) {
      return parseFloat(_str).toFixed(d);
    }
    return parseFloat(_str);
  } else {
    return 0;
  }
};

export const calculateReturn = (coins: any, sellPrice: any) => {
  if (coins && sellPrice) {
    let _c = toInt(coins, 4);
    let _p = toInt(sellPrice, 4);
    let r = formatNumber(_c * _p, 2);
    return r;
  } else {
    return null;
  }
};

export const isTruthy = (item: any) => {
  if (!item) {
    return false;
  }
  if (item === 0) {
    return false;
  } else if (item === "0") {
    return false;
  }
  return true;
};

export const storage = {
  save: (items: any) => {
    window.localStorage.setItem("cards", JSON.stringify(items));
  },
  get: () => {
    let items = window.localStorage.getItem("cards");
    if (items) {
      return JSON.parse(items);
    }
  },
};

export const toTimestamp = (date: string) => {
  var datum = Date.parse(date);
  return datum / 1000;
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US");
};
