function FormInput({ value, name, label, handleInputChange }) {
    const handleChange = ({ target }) => {
        handleInputChange(target.value, target.name)
    }

    return (
        <div className="form-group my-2">
            <label htmlFor={name} className="col-sm-3 control-label">* {label}</label>
            <div className="col-sm-12">
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
        </div>
    );
}

export default FormInput;
