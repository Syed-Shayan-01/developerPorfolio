

const Button = ({ text }) => {
  return (
    <button className="text-white duration-300 
     hover:text-black m-2 bg-blue-600 py-2 px-2 rounded">
      {text}
    </button>
  )
}

export default Button