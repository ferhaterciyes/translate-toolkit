import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "./../constants/constants";

export const getLanguages = createAsyncThunk(
  "languages/getLanguage",
  async () => {
    const res = await axios.request(options);

    return res.data.data.languages;
  },
);

export const setTranslate = createAsyncThunk("translate", async ({sourceLang , targetLang , text}) => {
  const Params = new URLSearchParams();
  Params.set("source_language", sourceLang.value);
  Params.set("target_language", targetLang.value);
  Params.set("text", text);
console.log(text);
  const options = {
    method: "POST",
    url: "https://text-translator2.p.rapidapi.com/translate",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "1f1c4d3967msha952b833c2974ccp156b77jsn699a8dbe45d5",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    data: Params,
  };

  const res = await axios.request(options);
console.log(res);
  // Çevrilen metni döndür
  return res.data.data.translatedText;
});
