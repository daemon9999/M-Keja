import { createElement } from 'react';
import classNames from 'classnames';
export default function Button({ as = 'button', variant, children, ...props }) {
  const element = createElement(
    as,           
    {
      className: classNames('px-10 py-4 flex items-center justify-center text-sm font-semibold rounded transition-all', {
        'bg-primary text-white hover:bg-white hover:text-primary': variant === 'default',
        'border border-primary text-primary bg-white hover:bg-primary hover:text-white ': variant === 'outline',
      }),
      ...props,
    },
    children,
  );

  return element;
}
