import { Avatar } from "primereact/avatar";
import AppProject from "./AppProject";

const AppAbout = () => {
  return (
    <div className="app__about py-6">
      <div className="w-11/12 m-auto my-10 p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <Avatar
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8BG6UD3b_Fowh4gtwIjw2GPTWQQ30uBy-w&s"
            size="xlarge"
            shape="circle"
            className="w-32 h-32 mx-auto"
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Chi sono</h3>
        <p className="text-gray-600 mb-4">
          Lavoro come Frontend Developer da oltre 3 anni, partecipando
          attivamente a tutte le fasi della progettazione e dello sviluppo dei
          progetti aziendali. Mi occupo della creazione di landing pages
          orientate alla lead generation, della progettazione di rubriche
          personali e applicativi CRUD. Ho anche contribuito allo sviluppo e
          alla manutenzione dell'intranet aziendale, un sistema complesso per la
          gestione delle risorse umane, delle richieste di ferie e permessi, e
          altre funzionalità cruciali per l'azienda.
        </p>
        <p className="text-gray-600 mb-4">
          Il mio obiettivo è garantire un'ottima esperienza utente (UX) e
          un'interfaccia utente (UI) efficace e coinvolgente. Utilizzo una vasta
          gamma di tecnologie e strumenti, tra cui{" "}
          <b>Vue.js (versioni 2.7 e 3)</b>, <b>JavaScript ES6</b>, <b>Sass</b>,{" "}
          <b>CSS</b>, <b>HTML5</b>, <b>MJML</b> per email responsive,{" "}
          <b>Bootstrap</b> e <b>Bootstrap-vue</b>, <b>PrimeVue</b> e{" "}
          <b>PrimeFlex</b>. Per la gestione dei pacchetti utilizzo <b>Yarn</b>,{" "}
          <b>Npm</b> e <b>pnpm</b>, e ho esperienza con <b>WordPress</b> e{" "}
          <b>Elementor</b> per la creazione di pagine web.
        </p>
        <p className="text-gray-600 mb-4">
          Utilizzo strumenti di comunicazione e collaborazione come{" "}
          <b>Outlook</b>, <b>Teams</b>, <b>Skype</b>, <b>Slack</b> e{" "}
          <b>Gmail</b>. Gestisco i progetti con <b>Trello</b>, <b>Confluence</b>{" "}
          e <b>Microsoft Loop</b>, mentre per il design mi avvalgo di{" "}
          <b>Figma</b>. Per lo sviluppo del codice, utilizzo <b>GitHub</b> e{" "}
          <b>VSCode</b>, e analizzo i dati con <b>Clarity</b>. <b>Excel</b> e{" "}
          <b>Word</b> sono i miei strumenti principali per la gestione dei dati
          e dei documenti.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Questo progetto
        </h3>
        <p className="text-gray-600 mb-4">
          Sono appassionato di apprendimento continuo e, da autodidatta, ho
          deciso di approfondire <b>React</b>, nonostante utilizzi <b>Vue.js</b>{" "}
          quotidianamente al lavoro. Dopo aver completato un corso introduttivo
          e letto parte della documentazione ufficiale, ho messo subito in
          pratica le mie conoscenze creando un secondo progetto: una Single Page
          Application (SPA) che utilizza un'API per scaricare una lista di
          Pokémon. Gli utenti possono visualizzare, aggiungere e rimuovere
          Pokémon dal loro Pokédex, e cancellare definitivamente i Pokémon dalla
          lista generale. Inoltre, è possibile cliccare su una card per
          visualizzare i dettagli di un singolo Pokémon.
        </p>
        <p className="mb-4 text-gray-600">
          È importante notare che i dati manipolati vengono memorizzati nel{" "}
          <b>session storage</b>, il che significa che le modifiche non vengono
          perse fino alla chiusura della finestra del browser. Per la
          navigazione tra le pagine, utilizzo <b>React Router</b>, mentre per la
          parte grafica mi avvalgo di <b>PrimeReact</b> combinato con{" "}
          <b>Tailwind CSS</b>. Per la memorizzazione e il caricamento dei dati
          utilizzo <b>Redux</b>.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Altri progetti
        </h3>

        <AppProject />
      </div>
    </div>
  );
};

export default AppAbout;
