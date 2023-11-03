import { createContext } from "react"

import { pt_BR } from "../constants";

export const LanguageContext = createContext({ language: pt_BR, changeLanguage: () => { } });
