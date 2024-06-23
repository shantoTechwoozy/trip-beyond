"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DialogContextType {
  isLoginDialogOpen: boolean;
  setLoginDialogOpen: (open: boolean) => void;
  isSignupDialogOpen: boolean;
  setSignupDialogOpen: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isSignupDialogOpen, setSignupDialogOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isLoginDialogOpen, setLoginDialogOpen, isSignupDialogOpen, setSignupDialogOpen }}>
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
};
