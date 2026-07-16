import { useState, createContext, useContext, useEffect, type ReactNode } from "react";
import CallbackDialog from "@/components/CallbackDialog";

interface CallbackDialogContextType {
  openCallback: () => void;
}

const CallbackDialogContext = createContext<CallbackDialogContextType>({ openCallback: () => {} });

export const useCallbackDialog = () => useContext(CallbackDialogContext);

const AUTO_OPEN_KEY = "callback-auto-shown";

export const CallbackDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(AUTO_OPEN_KEY)) return;
    } catch {
      /* ignore */
    }
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(AUTO_OPEN_KEY, "1");
      } catch {
        /* ignore */
      }
      setOpen(true);
    }, 60_000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <CallbackDialogContext.Provider value={{ openCallback: () => setOpen(true) }}>
      {children}
      <CallbackDialog open={open} onOpenChange={setOpen} />
    </CallbackDialogContext.Provider>
  );
};
