function addToQueryFunction(operation) {
	// form query
	var columnName = document.getElementById("columnSelect").value;
	var searchString = document.getElementById("searchString").value;
	var op = " " + operation;
	// and/or op the first time
	if (document.getElementById("visualizeQuery").value === "") {
		op = "";
	}
	query = op + " ( " + columnName + " = " + searchString + " )";
	// set query
	document.getElementById("visualizeQuery").value += query;
}

function resetQuery() {
	// reset the query text area
	document.getElementById("visualizeQuery").value = "";
}
