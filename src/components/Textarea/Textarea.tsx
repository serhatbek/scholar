import './Textarea.scss';

interface TextareaProps {
  rows: number;
  id: string;
  label: string;
  register: any;
  errors: any;
  focusedField: string | null;
  handleFocus: (field: string) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Textarea = ({
  id,
  label,
  register,
  errors,
  focusedField,
  handleFocus,
  handleBlur,
  rows,
}: TextareaProps) => {
  return (
    <div className='form__control'>
      <label
        className={focusedField === id ? 'label label--float' : 'label'}
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        {...register(id, { required: `${label} is required` })}
        onFocus={() => handleFocus(id)}
        onBlur={handleBlur}
      />
      {errors[id] && <span>{errors[id].message}</span>}
    </div>
  );
};

export default Textarea;
