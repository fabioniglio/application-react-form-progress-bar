import React, { createContext, useCallback, useContext, useState } from 'react';

interface FormSchema {
  name?: string;
  email?: string;
  phone?: string;
  salary?: string;
  step: number;
  maxSteps: number;
}

interface FormState {
  form: FormSchema;
}

interface FormContextData {
  form: FormSchema;
  formUpdate(form: FormSchema): void;
}

const FormContext = createContext<FormContextData>({} as FormContextData);

export const FormProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<FormState>({
    form: {
      name: '',
      email: '',
      phone: '',
      salary: '',
      step: 1,
      maxSteps: 5,
    },
  } as FormState);

  const formUpdate = useCallback(
    (form: FormSchema) => {
      setData({
        form: form,
      });
    },
    [setData],
  );

  return (
    <FormContext.Provider value={{ form: data.form, formUpdate }}>
      {children}
    </FormContext.Provider>
  );
};

export function useForm(): FormContextData {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be form within FormProvider');
  }

  return context;
}
