import * as m from "$paraglide/messages.js";
import { languageTag } from "$paraglide/runtime.js";
import { useState } from "react";
import "./App.css";

console.log({ m });
// npx @inlang/paraglide-js compile --project ./project.inlang --outdir ./src/paraglide

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(languageTag());

  return (
    <>
      {currentLanguage}
      <hr />
      {m.hello({ name: "John" }, { languageTag: currentLanguage })}
      <hr />
      <button onClick={() => setCurrentLanguage("en")}>Change Language en</button>
      <button onClick={() => setCurrentLanguage("de")}>Change Language de</button>
    </>
  );
}

export default App;
