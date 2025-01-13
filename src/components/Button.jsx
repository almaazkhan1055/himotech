const Button = ({ text, bgColor1, bgColor2 }) => {
  return (
    <button
      className="text-white px-8 py-2 rounded-full"
      style={{
        backgroundImage: `linear-gradient(to right, ${bgColor2}, ${bgColor1})`,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
