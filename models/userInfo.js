module.exports = function(sequelize, DataTypes) {
	var LoginInfo = sequelize.define("Login", {
		Username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		AuthToken: {
			type: DataTypes.STRING,
			allowNull: true
		},
		UserScore: {
			type: DataTypes.INTEGER,
			allowNull: true,
			default: 0
		}
	},{
		timestamps: false
	});

	// LoginInfo.associate = function(models) {
	// 	LoginInfo.hasMany(models.userSubmission, {
	// 		onDelete: "cascade"
	// 	});
	// };
	return LoginInfo;
};