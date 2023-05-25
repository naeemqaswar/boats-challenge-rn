import { createContext } from "react";

const context = createContext<DisplayContextType>({
    displayStatus: false,
    setDisplayStatus: undefined,
});

export default context;