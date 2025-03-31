const Button = ({onClick, text, customClass}) => {
    return (
  <button className={customClass} onClick={handleCopy}>
    {copied ? "Copied" : "copy"}
  </button>
    );
};

export default Button;