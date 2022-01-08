const appRoot = document.getElementById("app");

const app = {
  title: "This is my title",
  subTitle: "this is a sub title",
  options: ["One", "Two"],
};

const onFormsubmit = (e) => {
  e.preventDefault();
  const optionText = e.target.elements.option.value;
  if (optionText) {
    app.options.push(optionText);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecesion = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumber];
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <h5>{app.subTitle}</h5>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options "}</p>
      <button disabled={app.options.length < 2} onClick={onMakeDecesion}>
        What should i do?
      </button>

      <br />
      <button onClick={removeAll}>Remove all</button>
      <ul>
        {app.options.map((option, index) => {
          return <li key={index}>{option}</li>;
        })}
      </ul>

      <form onSubmit={onFormsubmit}>
        <input type="text" name="option" />
        <button type="submit">Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
