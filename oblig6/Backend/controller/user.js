import { userService } from "../services/index.js";
import catchAsyncErrors from "../middleware/catchAsync.js";
import ErrorHandler from "../util/errorHandler.js";

export const get = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.getuserById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`Brukern eksistere ikke`, 404)
    );
  }
  res.status(200).json(user);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createuser(req.body);
  res.status(201).json(user);
});

export const update = catchAsyncErrors(async (req, res, next) => {
  let user = await userService.getuserById(req.params.id);
  if (!user) {
    return next(new ErrorHandler(`Brukern eksistere ikke`, 404));
  }
  user = await userService.updateuser(req.params.id, req.body);
  res.status(200).json(user);
});

export const login = catchAsyncErrors(async (req, res, next) =>{
  const user = await userService.login(req.body); 
  if(!user){ 
      return next(new ErrorHandler(`Feil Epost og/eller Passord`, 404)
      );
  }
  res.status(200).json(user);
});
