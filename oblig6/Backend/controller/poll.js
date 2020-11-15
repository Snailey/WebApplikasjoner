import { pollService } from "../services/index.js";
import catchAsyncErrors from "../middleware/catchAsync.js";
import ErrorHandler from "../util/errorHandler.js";

export const get = catchAsyncErrors(async (req, res, next) => {
  console.log(req.params.id);
  const event = await (await pollService.getPollById({_id: req.params.id})).populate('author', ['email', 'id']);
  if (!event) {
    return next(
      new ErrorHandler(`Finner ikke Poll'en med ${req.params.id}`, 404)
    );
  }
  res.status(200).json(event);
});

export const list = catchAsyncErrors(async (req, res, next) => {
  const result = await pollService.listPolls();
  res.status(200).json( result );
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const event = await pollService.createPoll(req.body);
  res.status(201).json(event);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let poll = await pollService.getPollById(req.params.id);
  if (!poll) {
    return next(new ErrorHandler(`Finner ikke poll`, 404));
  }
  poll = await pollService.updatePoll(req.params.id, req.body);
  res.status(200).json(poll);
});
