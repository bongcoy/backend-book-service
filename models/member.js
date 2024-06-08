export default (sequelize, DataTypes) => {
  const Member = sequelize.define("Member", {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  });
  Member.associate = function (models) {
    Member.belongsToMany(models.Book, {through: "BorrowedBooks"});
  };
  return Member;
};
