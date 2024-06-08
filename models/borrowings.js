export default (sequelize, DataTypes) => {
  const Borrowings = sequelize.define("Borrowings", {
    borrowDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    returnDate: DataTypes.DATE,
  });
  return Borrowings;
};
