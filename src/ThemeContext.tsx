import { createContext } from "react";

const ThemeContext = createContext<[string, (theme: string) => void]>([
  "green",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
]);

export default ThemeContext;
