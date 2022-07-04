import defaultState from '@contexts/ProductDetailContext/state';
import { useFormContext } from 'react-hook-form';

const FormWithContext = () => {
  const { reset } = useFormContext();
  const handleOnClick = () => {
    // reset(defaultState);
    reset(defaultState.productDetail);
  };
  return (
    <div>
      <button onClick={handleOnClick}>Use Context</button>
    </div>
  );
};

export default FormWithContext;
