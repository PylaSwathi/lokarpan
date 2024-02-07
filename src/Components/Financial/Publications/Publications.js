import { useState } from "react";
import FinancialNav from "../../Navbar/FinancialSubNav/FinancialNav";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import "./Publications.css";

const Columns = [
  {
    field: "id",
    headerName: "ID",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "code",
    headerName: "Code",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "description",
    headerName: "Description",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "date",
    headerName: "Date",
    width: 275,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "file",
    headerName: "File",
    width: 275,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <button
        className="download-btn"
        onClick={() => handleDownload(params.row.id)}
      >
        Download
      </button>
    ),
  },
];

const Rows = [
  {
    id: 1,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 2,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 3,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 4,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 5,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 6,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 7,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 8,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 9,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 10,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
  {
    id: 11,
    code: "AR1",
    description: "test",
    date: "Jan 13, 2024",
  },
];

const handleDownload = (id) => {
  alert(`Downloading file for ID: ${id}`);
};

const useStyles = makeStyles({
  customHeader: {
    backgroundColor: "lightblue",
    fontSize: "16px",
    fontWeight: "bold",
  },
});

const Publications = ({ isDropdownVisible }) => {
  const [Typing, setSearchState] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <FinancialNav isDropdownVisible={isDropdownVisible} />
      <h1 className="title1">
        Let's accelerate sustainable and <br />
        inclusive growth together.
      </h1>
      <p className="desp">
        Lokarpan is a non-profit organization registered under the Societies
        Registration Act 1860 Lokarpan is registered u/s 12A of the Income Tax
        Act, 1961. Lokarpan is registered under the Foreign Contributions
        (Regulation) Act FCRA 136550133, and renewed dated 01.11.2016 for the
        receipt of foreign donations. Lokarpan assumes no obligation to update
        any forward looking statement or information, which speak as of their
        respective dates.
      </p>
      <hr />
      <div className="archives">
        <h1>Archives</h1>
      </div>
      <div className="column">
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="">
              Show{" "}
              <select className="publication-form-control" name="" id="">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{" "}
              Entries
            </label>
          </div>
          <div className="col-sm-6">
            <div>
              <label htmlFor="">
                Search:{" "}
                <input
                  type="search"
                  id={Typing ? "searchInput" : ""}
                  className="publication-form-control"
                  onKeyUp={() => {
                    setSearchState(true);
                  }}
                />
              </label>
            </div>
          </div>
        </div>
        <DataGrid
          className="row"
          rows={Rows}
          columns={Columns.filter((column) => column.field !== "id")}
          pageSize={5}
          rowSpacingType={"margin"}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          headerClassName={classes.customHeader}
          sx={{
            borderColor: "#fff",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Publications;
