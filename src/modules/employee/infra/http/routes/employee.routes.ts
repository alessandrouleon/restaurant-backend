import { Router } from "express";
import { EmployeeController } from "../controllers/EmployeeController";

const employeeRouter = Router();

const employeeController = new EmployeeController();

employeeRouter.post('/', employeeController.create);

export { employeeRouter }
