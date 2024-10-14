import type React from "react";
import { createContext, useContext } from "react";

import { userSettingHook } from "@/contexts/hooks/user-setting.hook";
import { type TUserSettingDto } from "@/dtos/user-setting.dto";

type ContextDataWrapper<Data> = {
  data?: Data;
  isLoading: boolean;
  refetch: () => Promise<void> | void;
};
export type TApplicationContext = {
  setting: ContextDataWrapper<Pick<TUserSettingDto, "currency">>;
};
const ApplicationContext = createContext<Partial<TApplicationContext>>({});

interface ApplicationContextProviderProps {
  children: React.ReactNode;
}
export const ApplicationContextProvider = ({
  children,
}: ApplicationContextProviderProps) => {
  const setting = userSettingHook();

  return (
    <ApplicationContext.Provider
      value={{
        setting,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = () => {
  return useContext(ApplicationContext);
};
