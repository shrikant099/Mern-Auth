import User from "../models/user.models.js";
import bcryptjs from "bcryptjs";
import validator from "validator";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(401).json({ success: false, message: "Missing Details" });
  }

  try {
    const isMatchEmailInDb = await User.findOne({ email: email });
    if (isMatchEmailInDb) {
      return res.status(401).json({
        success: false,
        message: "This Email is already Regiterd Please enter a New Email",
      });
    }

    if (!validator.isEmail(email)) {
      return res
        .status(401)
        .json({ success: false, message: "Enter a Valid Email" });
    }

    const isValidPassword = validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 0,
      minUppercase: 1,
      minNumbers: 0,
      minSymbols: 0,
    });

    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Minimum Length is Password 8 And 1 Uppercase",
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const userData = {
      name: name.trim(),
      email,
      password: hashedPassword,
    };

    const user = await User.create(userData);

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.status(201).json({
      success: true,
      message: "User Created Successfull",
      token,
      data: user,
    });
  } catch (error) {
    console.log(`Error Registration: ${error.message}`);
    res.send({ success: false, message: error.message });
  }
};

//  Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isValidUser = await User.findOne({ email: email });
    if (!isValidUser)
      return res.status(404).json({
        success: false,
        message: "Email is Not found Please Enter a Valid Email!",
      });

    const isValidPassword = await bcryptjs.compare(
      password,
      isValidUser.password
    );
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Password Do not Match Please Enter Valid Password",
      });
    }

    const token = jwt.sign({ user: isValidUser.name }, process.env.JWT_SECRET);
    return res.status(200).json({
      success: true,
      message: "Logged In Succesfull",
      token,
      data: {
        name: isValidUser.name,
        email: isValidUser.email,
      },
    });
  } catch (error) {
    console.log(`Error Login: ${error.message}`);
    res.send(error.message);
  }
};

export { registerUser , login};
