import { ICreateEmployeeDTO } from "@modules/employee/dtos/IEmployeeDTO";
import { CreateEmployeeService } from "@modules/employee/services/CreateEmployeeService";
import { Request, Response } from "express";
import { container } from "tsyringe";


class EmployeeController {

  public async create(req: Request, res: Response): Promise<Response> {
    const data = req.body as ICreateEmployeeDTO;

    const createEmployee = container.resolve(CreateEmployeeService);
    const employee = await createEmployee.execute(data);

    return res.status(201).json(employee);
  }

}

export { EmployeeController }
