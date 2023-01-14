import { Router } from "express";
import { employeeRouter } from '@modules/employee/infra/http/routes/employee.routes';


const router = Router();

router.use('/employee', employeeRouter);

export { router }
