import { useState } from "react";
import "./App.css";

import data from "./json/data.js";

const App = () => {
	const initialState = {
		acquired: "",
		index: -1,
		product: "",
		version: "",
		language: "",
		htm: "",
	};

	const [state, setState] = useState(initialState);

	const [visible, setVisible] = useState(false);

	const [input, setInput] = useState("");

	const [pdf, setPdf] = useState([]);

	const { acquired, index, product, version, language, htm } = state;

	const handleAcquiredChange = (e) => {
		const selectedIndex = e.target.selectedIndex;
		setState({
			...state,
			acquired: e.target.value,
			index: selectedIndex > 0 && selectedIndex - 1,
			product: "",
			version: "",
			language: "",
			htm: "",
		});
		setVisible(false);
	};

	const handleProductChange = (e) => {
		setState({
			...state,
			product: e.target.value,
			version: "",
			language: "",
			htm: "",
		});
	};

	const handleVersionChange = (e) => {
		setState({ ...state, version: e.target.value, language: "", htm: "" });
	};

	const handleSumbmit = (e, object) => {
		e.preventDefault();
		setVisible(true);

		const { acquired, product, version, language } = object;

		const acquiredData = data.find((item) => item.value === acquired);

		if (acquiredData) {
			// Find the matching product
			const productData = acquiredData.product.find(
				(products) => products.name === product
			);

			if (productData) {
				// Find the matching version
				const versionData = productData.version.find(
					(versions) => versions.type === version
				);

				if (versionData) {
					// Find the matching language
					const languageData = versionData.language.find(
						(languages) => languages.type === language
					);

					if (languageData) {
						setState({ ...state, htm: languageData.htm });
					}
				}
			}
		}
	};

	const findPDFByKeyword = (keyword) => {
		const matchingPDFs = [];

		// Iterate through the data array
		data.forEach((item) => {
			// Iterate through each product
			item.product.forEach((product) => {
				// Iterate through each version
				product.version.forEach((version) => {
					// Iterate through each language
					version.language.forEach((language) => {
						// Check if the language has a pdf field and if it contains the keyword
						if (
							language.pdf &&
							language.pdf.toLowerCase().includes(keyword.toLowerCase())
						) {
							// If a match is found, push the PDF link to the matchingPDFs array
							matchingPDFs.push(language.pdf);
						}
					});
				});
			});
		});

		setPdf(matchingPDFs);
	};

	return (
		<div className="container-xl m-xl-auto d-flex justify-content-center align-items-center min-vh-100">
			<form
				className="w-100 p-3 d-grid gap-3"
				style={{ backgroundColor: "#f1f7fa" }}
				onSubmit={(e) => handleSumbmit(e, state)}
			>
				<div className="software">
					<label htmlFor="" className="form-label">
						How is the software acquired?
						<span className="text-danger">*</span>
					</label>
					<select
						name=""
						id=""
						className="form-select p-1"
						value={acquired}
						onChange={handleAcquiredChange}
					>
						<option value="">Select</option>
						{data.map(({ acquired, value }) => (
							<option key={acquired} value={value}>
								{acquired}
							</option>
						))}
					</select>
				</div>
				<div className="product">
					<label htmlFor="" className="form-label">
						Product Name
					</label>
					<select
						name=""
						id=""
						className="form-select p-1"
						value={product}
						onChange={handleProductChange}
						disabled={index < 0}
					>
						<option value="">Select</option>
						{index >= 0 &&
							data[index].product.map(({ name }) => (
								<option key={name} value={name}>
									{name}
								</option>
							))}
					</select>
				</div>
				<div className="version">
					<label htmlFor="" className="form-label">
						Version
					</label>
					<select
						name=""
						id=""
						className="form-select p-1"
						value={version}
						onChange={handleVersionChange}
						disabled={product === ""}
					>
						<option value="">Select</option>
						{product &&
							data[index].product
								.find(({ name }) => name === product)
								.version.map(({ type }) => (
									<option key={type} value={type}>
										{type}
									</option>
								))}
					</select>
				</div>
				<div className="language">
					<label htmlFor="" className="form-label">
						Language:
					</label>
					<select
						name=""
						id=""
						className="form-select p-1"
						value={language}
						onChange={(e) => setState({ ...state, language: e.target.value })}
						disabled={version === ""}
					>
						<option value="select">Select</option>
						{version &&
							data[index].product
								.find(({ name }) => name === product)
								.version.find(({ type }) => type === version)
								.language.map(({ type }) => (
									<option key={type} value={type}>
										{type}
									</option>
								))}
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
					<input
						type="text"
						className="form-control p-1"
						disabled={index < 0}
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
				</div>
				<div className="manual-submit-btn">
					<button
						className="btn btn-primary p-1 rounded-0"
						style={{ width: 100, backgroundColor: "#0072c6" }}
						onClick={() => findPDFByKeyword(input)}
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

				{visible && (
					<div className="search-results">
						{htm ? <a href={htm}>{language}</a> : "Not found"}
						{pdf.map((value, index) => (
							<div key={index}>
								<a href="">{value}</a>
								<br />
							</div>
						))}
					</div>
				)}
			</form>
		</div>
	);
};

export default App;
