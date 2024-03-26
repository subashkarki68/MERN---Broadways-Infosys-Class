import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";

function Currency() {
  const host = "api.frankfurter.app";
  const fetcher = (url: string) => axios(url).then((res) => res.data);
  const { data: currencyList, error } = useSWR(
    `https://${host}/currencies`,
    fetcher
  );

  const [from, setFrom] = useState({ amt: 0, cur: "" });
  const [to, setTo] = useState({ amt: 0, cur: "" });
  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (from.amt && from.cur && to.cur) {
        try {
          const { data } = await axios.get(
            `https://${host}/latest?amount=${from.amt}&from=${from.cur}&to=${to.cur}`
          );
          console.log("Exchange rate data:", data);
          setTo((prev) => ({
            ...prev,
            amt: Number(Object.values(data.rates)[0]),
          }));
        } catch (error) {
          console.error("Error fetching exchange rate:", error);
        }
      }
    };

    fetchExchangeRate();
  }, [from.amt, from.cur, to.cur]);

  return (
    <>
      <div className='flex flex-row gap-4 justify-center items-center mb-10'>
        <Select onValueChange={(cur) => setFrom((prev) => ({ ...prev, cur }))}>
          <span>From:</span>
          <SelectTrigger className='w-[280px]'>
            <SelectValue
              placeholder={currencyList ? "Select a Currency" : "Loading..."}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>From:</SelectLabel>

              {!currencyList && (
                <SelectItem value='apple'>Loading...</SelectItem>
              )}
              {currencyList &&
                Object.entries(currencyList)
                  .filter(
                    ([currencyCode, currencyName]) => currencyCode !== to.cur
                  )
                  .map(([currencyCode, currencyName]) => {
                    return (
                      <SelectItem
                        key={currencyCode}
                        value={currencyCode}
                      >{`${currencyCode} - ${currencyName}`}</SelectItem>
                    );
                  })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <br />
        <Select onValueChange={(cur) => setTo((prev) => ({ ...prev, cur }))}>
          <span>To:</span>
          <SelectTrigger className='w-[280px]'>
            <SelectValue
              placeholder={currencyList ? "Select a Currency" : "Loading..."}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {!currencyList && (
                <SelectItem value='apple'>Loading...</SelectItem>
              )}
              {currencyList &&
                Object.entries(currencyList)
                  .filter(
                    ([currencyCode, currencyName]) => currencyCode !== from.cur
                  )
                  .map(([currencyCode, currencyName]) => {
                    return (
                      <SelectItem
                        key={currencyCode}
                        value={currencyCode}
                      >{`${currencyCode} - ${currencyName}`}</SelectItem>
                    );
                  })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='flex flex-row flex-start gap-20 items-center'>
        <Input
          className='w-[200px]'
          type='number'
          placeholder='Enter amount'
          onChange={(e) =>
            setFrom((prev) => ({ ...prev, amt: +e.target.value }))
          }
        />
        <span>
          Result: {to.cur} {to.amt}
        </span>
      </div>
    </>
  );
}

export default Currency;
