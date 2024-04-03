import "../searchbox_component/search.css";

function SearchBox({ className, placeholder, onChangeHandler }) {
  return (
    <>
      <div className="App">
        <input
          className={` search-box  ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    </>
  );
}

export default SearchBox;
