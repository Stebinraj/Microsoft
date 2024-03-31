import "./App.css";

const App = () => {
	return (
		<div className="container-xl m-xl-auto d-flex justify-content-center align-items-center min-vh-100">
			<form
				className="w-100 p-3 d-grid gap-3"
				style={{ backgroundColor: "#f1f7fa" }}
			>
				<div className="software">
					<label htmlFor="" className="form-label">
						How is the software acquired?
						<span className="text-danger">*</span>
					</label>
					<select name="" id="" className="form-select p-1">
						<option value="select">Select</option>
					</select>
				</div>
				<div className="product">
					<label htmlFor="" className="form-label">
						Product Name
					</label>
					<select name="" id="" className="form-select p-1">
						<option value="select">Select</option>
					</select>
				</div>
				<div className="version">
					<label htmlFor="" className="form-label">
						Version
					</label>
					<select name="" id="" className="form-select p-1">
						<option value="select">Select</option>
					</select>
				</div>
				<div className="language">
					<label htmlFor="" className="form-label">
						Language:
					</label>
					<select name="" id="" className="form-select p-1">
						<option value="select">Select</option>
					</select>
				</div>
				<div className="dropdown-submit-btn">
					<button
						className="btn btn-primary p-1 rounded-0"
						style={{ width: 100, backgroundColor: "#0072c6" }}
					>
						Go
					</button>
				</div>
				<div className="heading">
					<h5>OR</h5>
				</div>
				<div className="manual-search">
					<label htmlFor="">Search For :</label>
					<input type="text" className="form-control p-1" />
				</div>
				<div className="manual-submit-btn">
					<button
						className="btn btn-primary p-1 rounded-0"
						style={{ width: 100, backgroundColor: "#0072c6" }}
					>
						Go
					</button>
				</div>
				<div className="link">
					<a
						href="#"
						className="text-decoration-none"
						style={{ color: "#0072c6" }}
					>
						<small>Get Acrobat Reader</small>
					</a>
				</div>
			</form>
		</div>
	);
};

export default App;
