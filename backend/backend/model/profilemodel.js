const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
  photo: {
    type: String,
  },

  ImgId: {
    type: Number
  }
});

const profilemodel = mongoose.model("profile", profileSchema);

module.exports = profilemodel;
