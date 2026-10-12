import { createContext, useState } from "react";

export const GetPathContext = createContext();

const { Provider } = GetPathContext;
const GetPathProvider = ({ children = null }) => {
  const [getPath, setGetPath] = useState("");
  const value = { getPath, setGetPath }

  return <Provider value={value}>{children}</Provider>
}

export default GetPathProvider;