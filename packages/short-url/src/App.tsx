import * as React from "react";
import { Button, Input } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const STORE_NAME = "short_urls";

interface ISortURL {
  id?: number;
  url: string;
  urlKey?: string;
}

const SIGNS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-+".split("");

export const App = () => {
  const [url, setUrl] = useState("");
  const dbRef = useRef<IDBDatabase>();
  const [shortUrl, setShortUrl] = useState<string>();
  const [shortURLs, setShortUrls] = useState<ISortURL[]>();

  const getWriteStore = () =>
    dbRef.current.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME);

  const getReadStore = () =>
    dbRef.current.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME);

  const save = (shortURL: ISortURL) =>
    new Promise<number>((resolve, reject) => {
      const record = getWriteStore().add(shortURL);
      record.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };
      record.onerror = (event) => {
        reject(event);
      };
    });

  const update = (shortURL: ISortURL) =>
    new Promise((resolve, reject) => {
      const record = getWriteStore().put(shortURL);
      record.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };
      record.onerror = (event) => {
        reject(event);
      };
    });

  const remove = (id: IDBValidKey | IDBKeyRange) =>
    new Promise((resolve, reject) => {
      const record = getWriteStore().delete(id);
      record.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };
      record.onerror = (event) => {
        reject(event);
      };
    });

  const getOne = (id: IDBValidKey | IDBKeyRange) =>
    new Promise<ISortURL>((resolve, reject) => {
      const record = getReadStore().get(id);
      record.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };
      record.onerror = (event) => {
        reject(event);
      };
    });

  const findAll = () =>
    new Promise<ISortURL[]>((resolve, reject) => {
      const records = getReadStore().getAll();
      records.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };
      records.onerror = (event) => {
        reject(event);
      };
    });

  const to64 = (num: number) => {
    let result = [];
    let div = num;
    while (div) {
      result.push(SIGNS[div % 64]);
      div = Math.floor(div / 64);
    }
    return result.reverse().join("");
  };

  const shorten = async (id: number) => {
    const shortURL = await getOne(id);
    shortURL.urlKey = to64(id);
    await update(shortURL);
    return shortURL.urlKey;
  };

  const handleSortURL = async () => {
    if (!dbRef.current) {
      return;
    }
    const id = await save({ url });
    const shortUrl = await shorten(id);
    setShortUrl(shortUrl);
  };

  const handleAllShortURLs = async () => {
    const results = await findAll();
    setShortUrls(results);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  /**
   * 连接数据库并创建表
   */
  useEffect(() => {
    const version = 1;
    const request = window.indexedDB.open("front_end_training", version);
    request.onerror = console.log;
    request.onsuccess = (event) => {
      dbRef.current = (event.target as IDBOpenDBRequest).result;
    };
    /**
     * 数据库升级时回调， version变化会调用。
     * @param event
     */
    request.onupgradeneeded = (event) => {
      dbRef.current = (event.target as IDBOpenDBRequest).result;
      const store = dbRef.current.createObjectStore(STORE_NAME, {
        keyPath: "id",
        autoIncrement: true,
      });
      store.createIndex("url", "url", { unique: false });
      store.createIndex("urlKey", "urlKey", { unique: false });
    };
  }, []);

  return (
    <div>
      <Input value={url} onChange={handleUrlChange} />
      <Button onClick={handleSortURL} disabled={!url}>
        生成短链
      </Button>
      <Button onClick={handleAllShortURLs}>所有的短链</Button>
      <br />
      {shortUrl && <> 短链 https://yunji2025.com/{shortUrl}</>}
      <br />
      短链列表
      <ul>
        {shortURLs?.map((o) => (
          <ol key={o.id}>
            {o.url} {o.urlKey}
          </ol>
        ))}
      </ul>
    </div>
  );
};
