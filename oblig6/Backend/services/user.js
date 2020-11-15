import User from "../models/user.js";

export const getuserById = async (id) => User.findById(id);

export const createuser = async (data) => User.create(data);

export const updateuser = async (id, data) =>
User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const login = async (data) => User.findOne({email: data.email, password: data.password});
