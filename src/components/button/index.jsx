import { createElement } from 'react';
import classNames from 'classnames';
export default function Button({
  as = 'button',
  variant,
  icon = null,
  additionalStyle='',
  children,
  ...props
}) {
  let element;

  if (icon) {
    element = createElement(
      as,
      {
        className: 'flex items-center px-6 py-3 bg-primary rounded gap-x-2 group hover:bg-white transition-all ' + additionalStyle,
        ...props,
      },

      [
        createElement(
          'p',
          {
            className: 'text-sm text-white font-semibold group-hover:text-primary transition-all',
          },
          children,
        ),
        createElement(icon, {
          size: 20,
          className: 'text-white group-hover:text-primary transition-all'
        }),
      ],
    );
  } else {
    element = createElement(
      as,
      {
        className: classNames(
          'px-10 py-4 flex items-center justify-center text-sm font-semibold rounded transition-all ' + additionalStyle ,
          {
            'bg-primary text-white hover:bg-white hover:text-primary':
              variant === 'default',
            'border border-primary text-primary bg-white hover:bg-primary hover:text-white ':
              variant === 'outline',
          },
        ),
        ...props,
      },
      children,
    );
  }

  return element;
}
