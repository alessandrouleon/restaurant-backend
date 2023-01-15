import { ICreateEmployeeDTO } from "../dtos/IEmployeeDTO";
import { Employee } from "../infra/typeorm/entities/Employee";

interface IEmployeeRepository {
  create(data: ICreateEmployeeDTO): Promise<Employee>;
  findByUserName(username: string): Promise<Employee | undefined>;
  findByEmail(email: string): Promise<Employee | undefined>;
}

export { IEmployeeRepository }
