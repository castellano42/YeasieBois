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
			defaultValue: 0,
			allowNull: false
			
		}
	},{
		timestamps: false
	});

	LoginInfo.associate = function(models) {
		LoginInfo.hasMany(models.FullUserBeerReview, {
			onDelete: "cascade"
		});
	};
	return LoginInfo;
};