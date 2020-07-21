import { renderHook, act } from '@testing-library/react-hooks';
import { useForm, FormProvider } from '../../hooks/FormContext';

describe('Form Hook', () => {
  it('should be able to fill the form', () => {
    const { result } = renderHook(() => useForm(), {
      wrapper: FormProvider,
    });

    console.log(result.current);

    act(() => {
      result.current.formUpdate({
        name: 'Fabio Niglio',
        email: 'fabio@gmail.com',
        phone: '+4917732432323',
        salary: '0 - 4000',
        step: 0,
        maxSteps: 5,
      });
    });

    expect(result.current.form.name).toEqual('Fabio Niglio');
  });
});
