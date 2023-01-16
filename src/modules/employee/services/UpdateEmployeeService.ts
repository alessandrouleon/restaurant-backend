import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IUpdateEmployeeDTO } from "../dtos/IEmployeeDTO";
import { Employee } from "../infra/typeorm/entities/Employee";
import { IEmployeeRepository } from "../repositories/IEmployeeRepository";


@injectable()
class UpdateEmployeeService {

  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository
  ) { }

  public async execute({ id, ...rest }: IUpdateEmployeeDTO): Promise<Employee> {
    const employee = await this.employeeRepository.findById(id);

    if (!employee) {
      throw new AppError("Este usuário não existe!");
    }

    Object.assign(employee, {
      ...rest
    });

    await this.employeeRepository.update(employee);

    return employee;
  }

}

export { UpdateEmployeeService }
