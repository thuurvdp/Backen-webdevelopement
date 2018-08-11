const mongoose = require("mongoose");

const ecoPlanSchema = new mongoose.Schema({
	id: { type: mongoose.Schema.ObjectId, auto: true },
	NAAM: { type: String, required: true },
	STRAAT: { type: String, required: true },
	POSTCODE: { type: String, required: true },
	GEMEENTE: { type: String, required: true },
	NUMMER: { type: String },
	BUS: { type: String },
	WEBADRES: { type: String },
	telefoon: { type: String },
	CATEGORIE: { type: String },
	LABEL: { type: String },
	opmerkingen: { type: String },
	lat: { type: Number },
	lng: { type: Number },
	comment: [{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
		message: { type: String },
		time: { type: Date, default: Date.now() },
	}],
});

module.exports = mongoose.model("ecoPlan", ecoPlanSchema);
