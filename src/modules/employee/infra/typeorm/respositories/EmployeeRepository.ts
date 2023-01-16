import { ICreateEmployeeDTO, IUpdateEmployeeDTO } from "@modules/employee/dtos/IEmployeeDTO";
import { IEmployeeRepository } from "@modules/employee/repositories/IEmployeeRepository";
import { getRepository, Like, Repository } from "typeorm";
import { Employee } from "../entities/Employee";


class EmployeeRepository implements IEmployeeRepository {
  private ormRepository: Repository<Employee>;

  public constructor() {
    this.ormRepository = getRepository(Employee);
  }

  public async create(data: ICreateEmployeeDTO): Promise<Employee> {
    const employee = this.ormRepository.create(data);
    await this.ormRepository.save(employee);
    return employee;
  }

  public async findByUserName(username: string): Promise<Employee | undefined> {
    return await this.ormRepository.findOne({ username });
  }

  public async findByEmail(email: string): Promise<Employee | undefined> {
    return await this.ormRepository.findOne({ email });
  }

  public async findById(id: number): Promise<Employee | undefined> {
    return await this.ormRepository.findOne({ id });
  }

  public async update(employee: Employee): Promise<Employee> {
    return await this.ormRepository.save(employee);

  }

}

export { EmployeeRepository }
