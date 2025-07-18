import "./Header.css";

const Header = ({ setModal }) => {
  return (
    <div className="header text-center">
      <h3 className="mt-3">WhatsRemind ⏰ </h3>
      <button
        className="btn btn-primary mt-2"
        onClick={() => {
          setModal(true);
        }}
      >
        Create Reminder 🚀
      </button>
    </div>
  );
};
export default Header;
