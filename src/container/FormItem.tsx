import {type FC, useMemo} from 'react';
import Input from 'components/Input';
import Select from 'components/Select';
import Button from 'components/Button';
import type {ComponentProps} from 'types/components';

const FormItem: FC<ComponentProps> = ({type, ...props}) => {
  const Component = useMemo(() => {
    switch (type) {
      case 'textedit':
        return Input;
      case 'selection':
        return Select;
      case 'button':
        return Button;
      default:
        return null;
    }
  }, [type]);

  if (!Component) return null;

  return <Component {...props} />;
};

export default FormItem;
