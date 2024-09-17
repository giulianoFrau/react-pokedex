import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const project = [
  {
    progetto: "Crud application Paesi del mondo",
    link_progetto: "https://react-crud-app-eosin.vercel.app/",
    framework: "React 18",
    tecnologie:
      "React, Redux, Tailwind CSS, PrimeReact, Axios,Rest API, React Router, Vite",
    link_repo: "https://github.com/giulianoFrau/react-approach.git",
  },
  {
    progetto: "Sito vetrina",
    link_progetto: "https://sitovetrina.vercel.app/#/homePage",
    framework: "Vue 3",
    tecnologie: "Vue, PrimeVue, Tailwind CSS, Pinia, Vue Router, Vite",
    link_repo: "https://github.com/giulianoFrau/vetrina.git",
  },
];

const AppProject = () => {
  return (
    <div className="card">
      <DataTable
        value={project}
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
