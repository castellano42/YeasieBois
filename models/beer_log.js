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
		Aroma-Malt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Aroma-Hops: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Appearance-Clarity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Appearance-Color: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flavor-Malt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flavor-Hops: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IBU: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ABV: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Country-Of-Origin: {
			type: DataTypes.STRING,
			allowNull: false
		},
		City/State-Of-Origin: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Style: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Total-Points: {
			type: DataTypes.INTEGER,
			allowNull: false
		}


	});
	return Beer;
}