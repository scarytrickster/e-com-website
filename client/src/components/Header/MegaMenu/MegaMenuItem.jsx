const MegaMenuItem = ({ label, action, currentMenu }) => {
  return (
    <button
      onClick={() => {
        if (currentMenu !== label) {
          action(label);
        } else {
          action(null);
        }
      }}
      className={`text-sm font-medium text-slate-700 hover:text-slate-900`}>
      {label}
    </button>
  );
};

export default MegaMenuItem;
