function FormFile({ name, label, handleFileChange }) {
    const handleChange = ({ target }) => {
        handleFileChange(target.files)
    }

    return (
        <div className="form-group">
            <label htmlFor={name} className="col-sm-3 control-label">{label}</label>
            <div className="col-sm-12">
                <input
                    type="file"
                    onChange={handleChange}
                    className="form-control"
                    multiple
                />
            </div>
        </div>
    );
}

export default FormFile;
