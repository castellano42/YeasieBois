module.exports = function(sequelize, DataTypes) {
	var AverageAnswers = sequelize.define("AverageAnswers", {
		Beer_Name: {
			type: DataTypes.STRING,
			allowNull: true

		},
		Brewery: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Aroma_Malt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Aroma_Hops: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Appearance_Clarity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Appearance_Color: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flavor_Malt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flavor_Hops: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IBU: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ABV: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: true
		},
		Country_Of_Origin: {
			type: DataTypes.STRING,
			allowNull: true
		},
		City_or_State_Of_Origin: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Total_Points: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Rating: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		Comments: {
			type: DataTypes.TEXT,
			allowNull: true

		}	
	},{
		timestamps: false
	});
	// AverageAnswers.associate = function(models) {
	// 	AverageAnswers.belongsTo(models.userInfo.js, {
	// 		foreignKey: {
	// 			allowNull: true
	// 		}
	// 	});
	// };

	return AverageAnswers;
};