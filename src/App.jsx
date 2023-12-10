import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLanguages, setTranslate } from "./app/translateActions";
import { setTranslated } from "./app/translateClice";
function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [sourceLang, setSourceLang] = useState({
    label: "Turkish",
    value: "tr",
  });
  const [targetLang, setTargetLang] = useState({
    label: "English",
    value: "en",
  });
  const state = useSelector((store) => store.translate);
  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  const filteredlang = useMemo(
    () =>
      state.languages.map((item) => ({
        value: item.code,
        label: item.name,
      })),
    [state.languages],
  );

  const handleTranslate = () => {
    dispatch(setTranslate({ sourceLang, targetLang, text }));
  };

  const handleChange = () => {
    setSourceLang(targetLang),
    setTargetLang(sourceLang);
    setText(state.translated)
    dispatch(setTranslated(text))

  };

  return (
    <div className="container">
      <h1>ÇEVİRİ +</h1>
      <div className="upper">
        <Select
          value={sourceLang}
          isLoading={state.islangLoading}
          isDisabled={state.islangLoading}
          className="select"
          onChange={setSourceLang}
          options={filteredlang}
        />

        <button onClick={handleChange}>Değiş</button>
        <Select
          value={targetLang}
          className="select"
          onChange={setTargetLang}
          options={filteredlang}
        />
      </div>
      <div className="middle">
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
       <div className="target-trans">
       {state.isTransLoading && <div className="loader"></div> }
        <textarea value={state.translated} disabled />
       </div>
      </div>
      <div className="bottom">
        <button onClick={handleTranslate}>Çevir</button>
      </div>
    </div>
  );
}

export default App;
