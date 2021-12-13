import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Welcome name="Sourabh" />
      <Welcome name="Sanjay" />
      <Welcome name="Samadhan" />
    </div>
  );
}

function Welcome(props) {
  return (
    <div>
      <h1>Hello {props.name}😎 </h1>
      <img src={require("/shincha.jpeg")} />
    </div>
  );
}
