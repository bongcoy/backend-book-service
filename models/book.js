export default (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    stock: DataTypes.INTEGER,
  });
  Book.associate = function (models) {
    Book.belongsToMany(models.Member, {through: "BorrowedBooks"});
  };
  return Book;
};
