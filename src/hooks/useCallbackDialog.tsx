import { useState, createContext, useContext, type ReactNode } from "react";
import CallbackDialog from "@/components/CallbackDialog";

interface CallbackDialogContextType {
  openCallback: () => void;
}

const CallbackDialogContext = createContext<CallbackDialogContextType>({ openCallback: () => {} });

export const useCallbackDialog = () => useContext(CallbackDialogContext);

export const CallbackDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <CallbackDialogContext.Provider value={{ openCallback: () => setOpen(true) }}>
      {children}
      <CallbackDialog open={open} onOpenChange={setOpen} />
    </CallbackDialogContext.Provider>
  );
};
