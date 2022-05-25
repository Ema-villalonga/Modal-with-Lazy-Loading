import { openModal, openModalAccount } from "./components/openModal";
import "./styles.css";

function App() {
  function handleOpenModal() {
    openModal();
  }
  function handleOpenModalTwo() {
    openModalAccount();
  }
  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir Modal</button>
      <button onClick={handleOpenModalTwo}>Abrir Modal</button>
    </div>
  );
}

export default App;
