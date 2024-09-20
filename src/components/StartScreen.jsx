import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para comelçar a jogar</p>
      <button onClick={startGame}>Começar!</button>
    </div>
  );
};

export default StartScreen;
