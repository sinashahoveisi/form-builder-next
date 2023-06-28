import {type FC, Fragment} from 'react';
import map from 'lodash/map';
import FormItem from '@/container/FormItem';
import type {FormBuilderProps} from '@/types/containers';
import type {ComponentProps} from '@/types/components';

const FormBuilder: FC<FormBuilderProps> = ({components}) => {
  return (
    <Fragment>
      {map(components, (component: ComponentProps) => (
        <FormItem {...component} />
      ))}
    </Fragment>
  );
};

export default FormBuilder;
