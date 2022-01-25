const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <div>
      <input
        className="form-control form-control-lg mt-2"
        id="floatingTextarea"
        value={text}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      <button className="btn btn-primary btn-lg mt-2" onClick={handleSubmit}>
        Добавить
      </button>
    </div>
  );
};
export default InputField;
