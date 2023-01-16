import { ICreateEmployeeDTO, IUpdateEmployeeDTO } from "@modules/employee/dtos/IEmployeeDTO";
import { CreateEmployeeService } from "@modules/employee/services/CreateEmployeeService";
import { UpdateEmployeeService } from "@modules/employee/services/UpdateEmployeeService";
import { Request, Response } from "express";
import { container } from "tsyringe";


class EmployeeController {

  public async create(request: Request, response: Response): Promise<Response> {
    const data = request.body as ICreateEmployeeDTO;

    const createEmployee = container.resolve(CreateEmployeeService);
    const employee = await createEmployee.execute(data);

    return response.status(201).json(employee);
  }

  public async update(reqest: Request, response: Response): Promise<Response> {
    const { id } = reqest.params;
    const data = reqest.body;

    const updateEmployee = container.resolve(UpdateEmployeeService);
    const update = await updateEmployee.execute({
      id: Number(id),
      ...data
    });

    return response.status(201).json(update);
  }

}

export { EmployeeController }
