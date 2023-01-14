import { ICreateEmployeeDTO } from "@modules/employee/dtos/IEmployeeDTO";
import { IEmployeeRepository } from "@modules/employee/repositories/IEmployeeRepository";
import { getRepository, Repository } from "typeorm";
import { Employee } from "../entities/Employee";


class EmployeeRepository implements IEmployeeRepository {
  private ormRepository: Repository<Employee>;

  constructor() {
    this.ormRepository = getRepository(Employee);
  }

  public async create(data: ICreateEmployeeDTO): Promise<Employee> {
    const employee = this.ormRepository.create(data);
    await this.ormRepository.save(employee);
    return employee;
  }

}

export { EmployeeRepository }
