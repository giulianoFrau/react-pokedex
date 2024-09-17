import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { projects } from "../options/projects.js";

const AppProject = () => {
  return (
    <div className="card">
      <DataTable
        value={projects}
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
        className="p-0"
      >
        <Column
          field="progetto"
          header="Link progetto"
          body={(rowData) => (
            <a href={rowData.link_progetto} target="_blank">
              {rowData.progetto}
            </a>
          )}
        ></Column>
        <Column field="framework" header="Framework utilizzato"></Column>
        <Column field="tecnologie" header="Tecnologie utilizzate"></Column>
        <Column
          field="link_repo"
          header="Link Repository"
          body={(rowData) => (
            <a href={rowData.link_repo} target="_blank">
              {rowData.link_repo}
            </a>
          )}
        ></Column>
      </DataTable>
    </div>
  );
};

export default AppProject;
