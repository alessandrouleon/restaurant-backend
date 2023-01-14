import { inject, injectable } from "tsyringe";
import { ICreateEmployeeDTO } from "../dtos/IEmployeeDTO";
import { Employee } from "../infra/typeorm/entities/Employee";
import { IEmployeeRepository } from "../repositories/IEmployeeRepository";


@injectable()
class CreateEmployeeService {

  public constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository
  ) { }

  public async execute(data: ICreateEmployeeDTO): Promise<Employee> {

    const employee = await this.employeeRepository.create(data);
    return employee;
  }
}

export { CreateEmployeeService }
