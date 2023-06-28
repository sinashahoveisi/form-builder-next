type ComponentType = 'textedit' | 'selection' | 'button';

export interface ComponentProps {
  type: ComponentType;
  label: string;
  text: string;
  items: Array<string>;
  placeholder: string;
  height: string;
  width: string;
}
