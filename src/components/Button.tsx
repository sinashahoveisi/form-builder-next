import type {FC} from 'react';
import type {ComponentProps} from 'types/components';

const Button: FC<ComponentProps> = ({width, height, text}) => {
  return (
    <button type="button" className="btn-wide btn" style={{width, height}}>
      {text}
    </button>
  );
};

export default Button;
