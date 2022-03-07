import { createContext, ReactNode, useState, useEffect } from "react";
import { UserType } from "../types";
import { api } from "../services/api";

// Tipagem das props
type ContextProviderType = {
  children: ReactNode;
};

// Usar esta função nos arquivos junto com o useContext do React
export const DataContext = createContext({});

// Envlover os elementos a serem compartilhados com essa função
export const ContextProvider = (props: ContextProviderType) => {
  const [users, setUsers] = useState<UserType[]>([]);

  async function getUsersData() {
    const response = await api.get("/users");
    setUsers(response.data);
  }

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <DataContext.Provider value={{ users }}>
      {props.children}
    </DataContext.Provider>
  );
};
