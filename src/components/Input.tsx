import type {FC} from 'react';
import type {ComponentProps} from 'types/components';

const Input: FC<ComponentProps> = ({width, height, label, placeholder}) => {
  return (
    <div className="form-control w-full" style={{width, height}}>
      <label htmlFor="input" className="label">
        <span className="label-text">{label}</span>
      </label>
      <input name="input" type="text" placeholder={placeholder} className="input-bordered input w-full max-w-xs" />
    </div>
  );
};

export default Input;
