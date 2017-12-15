module.exports = function(sequelize, DataTypes) {
	var Beer = sequelize.define("Beer", {
		Beer_Name: {
			type: DataTypes.STRING,
			allowNull: false

		},
		Brewery: {
			type: DataTypes.STRING,
			allowNull: false
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
			allowNull: false
		},
		ABV: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false
		},
		Country_Of_Origin: {
			type: DataTypes.STRING,
			allowNull: false
		},
		City_or_State_Of_Origin: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Total_Points: {
			type: DataTypes.INTEGER,
			allowNull: false
		}


	});
	return Beer;
}