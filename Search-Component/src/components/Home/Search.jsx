const Search = () => {
	return (
		<form className="w-100 p-2" style={{ backgroundColor: "#F1F7FA" }}>
			<div className="group">
				<label htmlFor="" className="form-label">
					How is the software acquired? <span className="text-danger">*</span>
				</label>
				<select name="" id="" className="form-select p-1">
					<option value="">dhd</option>
					<option value="">dggdhdg</option>
				</select>
			</div>

			<div className="group">
				<label htmlFor="" className="form-label">
					Product Name:
				</label>
				<select name="" id="" className="form-select p-1">
					<option value="">dhd</option>
					<option value="">dggdhdg</option>
				</select>
			</div>

			<div className="group">
				<label htmlFor="" className="form-label">
					Version
				</label>
				<select name="" id="" className="form-select p-1">
					<option value="">dhd</option>
					<option value="">dggdhdg</option>
				</select>
			</div>

			<div className="group">
				<label htmlFor="" className="form-label">
					Language:
				</label>
				<select name="" id="" className="form-select p-1">
					<option value="">dhd</option>
					<option value="">dggdhdg</option>
				</select>
			</div>

			<div className="group">
				<button className="btn btn-primary w-25">Go</button>
			</div>

			<h5>OR</h5>

			<div className="group">
				<label htmlFor="" className="form-label">
					Search For:
				</label>
				<input type="text" className="form-control" />
			</div>

			<div className="group">
				<button className="btn btn-primary w-25">Go</button>
			</div>
		</form>
	);
};

export default Search;
