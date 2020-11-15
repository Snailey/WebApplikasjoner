import Poll from "../models/poll.js";

export const getPollById = async (id) => Poll.findById(id).populate('author', ['name','email', 'id']);

export const listPolls = async () => Poll.find();

export const createPoll = async (data) => Poll.create(data);

export const updatePoll = async (_id, data) => Poll.findByIdAndUpdate(_id, data, {});

export const getPollByName = async (name) => Poll.findOne({'pollName':name});

