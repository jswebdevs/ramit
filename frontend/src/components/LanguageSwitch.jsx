const LanguageSwitch = () => {
    return (
      <div>
        <button className="bg-white px-3 py-1 rounded-3xl">
          <span className="bn text-red-500">
            <a href="./BanglaVersion">BN</a>
          </span>
          <span className="en text-white bg-red-500 ms-1 text-sm px-1 py-1 rounded-lg">
            <a href="/">EN</a>
          </span>
        </button>
      </div>
    );
};

export default LanguageSwitch;