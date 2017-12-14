CREATE DATABASE yeastie_boysdb;

USE yeastie_boysdb;

CREATE TABLE BeerLog (
	id INT NOT NULL AUTO_INCREMENT,
    Beer_Name VARCHAR(60) NOT NULL,
    Brewery VARCHAR(80) NOT NULL,
    Aroma_Malt VARCHAR(80) NOT NULL,
    Aroma-Hops VARCHAR(80) NOT NULL,
    Appearance_Clarity VARCHAR(80) NOT NULL,
    Appearance_Color VARCHAR(80) NOT NULL,
    Flavor_Malt VARCHAR(80) NOT NULL,
    Flavor_Hops VARCHAR(80) NOT NULL,
    IBU INT NOT NULL,
    ABV INT NOT NULL,
    Country_Of_Origin VARCHAR(80) NOT NULL,
    Style VARCHAR(80) NOT NULL,
    Total_Points INT NOT NULL,
);

INSERT INTO BeerLog (Beer_Name, Brewery, Aroma_Malt, Aroma-Hops, Appearance_Clarity, Appearance_Color, Flavor_Malt, Flavor_Hops, IBU, ABV, Country_Of_Origin, Style, Total_Points) VALUES ();



