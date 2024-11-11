// src/context/UserContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import Usuario from "../../model/Usuario";
import { useNavigate } from "react-router-dom";

interface UserContextType {
  usuario: Usuario | null;
  setUsuario: React.Dispatch<React.SetStateAction<Usuario | null>>;
  autenticarUsuario: (email: string, senha: string) => Promise<void>;
  desconectarUsuario: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const navigate = useNavigate();

    const autenticarUsuario = async (email:string, senha:string) => {
      try {
        const response = await axios.get<Usuario>(`${import.meta.env.VITE_API_URL}/api/v1/usuarios/email/${email}`);
        if(response.data.senha == senha){
            setUsuario(response.data);
        } else {
            throw new Error("Credenciais inválidas.");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    };

    const desconectarUsuario = async () => {
        setUsuario(null);
        navigate("/");
    }

  return (
    <UserContext.Provider value={{ usuario, setUsuario, autenticarUsuario, desconectarUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export function usarUsuario() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("usarUsuario deve ser utilizado dentro de um UserProvider.");
  }
  return context;
};