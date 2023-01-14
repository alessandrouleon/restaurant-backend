import { ICreateEmployeeDTO } from "../dtos/IEmployeeDTO";
import { Employee } from "../infra/typeorm/entities/Employee";

interface IEmployeeRepository {
  create(data: ICreateEmployeeDTO): Promise<Employee>;
}

export { IEmployeeRepository }