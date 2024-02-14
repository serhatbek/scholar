import './Button.scss';
import classNames from 'classnames';
import { Icon } from '../../components';

interface ButtonProps {
  children: string;
  variant: string;
  href?: string;
  btnClass?: string;
  type?: boolean;
  iconLeft?: string;
  iconRight?: string;
  size?: string;
}

const Button = ({
  href,
  children,
  variant,
  btnClass,
  type,
  iconLeft,
  iconRight,
  size,
}: ButtonProps) => {
  return (
    <>
      {href ? (
        <a className={classNames(`btn btn--${variant}`, btnClass)} href={href}>
          {iconLeft ? <Icon icon={iconLeft} size={size} /> : null}
          <span>{children}</span>
          {iconRight ? <Icon icon={iconRight} size={size} /> : null}
        </a>
      ) : (
        <button
          type={type ? 'submit' : 'button'}
          className={classNames(`btn btn--${variant}`, btnClass)}
        >
          {iconLeft ? <Icon icon={iconLeft} size={size} /> : null}
          <span>{children}</span>
          {iconRight ? <Icon icon={iconRight} size={size} /> : null}
        </button>
      )}
    </>
  );
};

export default Button;
