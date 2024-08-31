'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { LS_KEY } from 'src/configs/constance';
import { LanguageType } from 'src/globals';
import { LocalStorage } from 'src/services';

interface ConfigContextProps {
  language: LanguageType;
  fn: {
    setLanguage: (language: LanguageType, isSleep?: boolean) => void;
  };
}

const ConfigContext = createContext<ConfigContextProps>({
  language: 'vi',
  fn: {
    setLanguage: () => {},
  },
});

interface Props {
  children: ReactNode;
}

export default function ConfigProvider({ children }: Props) {
  const [language, setLanguage] = useState<LanguageType>('en');

  function _setLanguage(lan: LanguageType) {
    LocalStorage.set(LS_KEY.LAN, lan);
    setLanguage(lan);
  }

  const contextData = useMemo<ConfigContextProps>(() => {
    return { language, fn: { setLanguage: _setLanguage } };
  }, [language]);

  return <ConfigContext.Provider value={contextData}>{children}</ConfigContext.Provider>;
}

export function useConfigContext() {
  return useContext(ConfigContext);
}
