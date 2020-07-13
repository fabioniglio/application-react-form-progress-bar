import React from 'react';
import { FormProvider } from './FormContext';

const AppProvider: React.FC = ({ children }) => (
  <FormProvider>{children}</FormProvider>
);
export default AppProvider;
