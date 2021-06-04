

exports.version = (req, res, next) => {
  return res.status(200).json("Hello Tabnine");
}