interface iconProps {
  icon: string;
  size: string;
}

const Icon = ({ icon, size }: iconProps) => {
  return (
    <i className={`icon icon-${icon}`} style={{ fontSize: `${size}` }}></i>
  );
};

export default Icon;
