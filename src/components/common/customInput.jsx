const CustomInput = ({ field, error, type, required, ...props }) => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={field.name}>
        {props.label}
      </label>
      {required && <span className="text-danger"> * </span>}
      <input
        {...field}
        id={field.name}
        type={type}
        className={["mb-2 form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
      />
      {error && <span className="invalid-feedback">{error}</span>}
    </div>
  );
};

export default CustomInput;
