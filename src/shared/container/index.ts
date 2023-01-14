
import { EmployeeRepository } from "@modules/employee/infra/typeorm/respositories/EmployeeRepository";
import { IEmployeeRepository } from "@modules/employee/repositories/IEmployeeRepository";
import { container } from "tsyringe";

container.registerSingleton<IEmployeeRepository>(
   'EmployeeRepository',
   EmployeeRepository
)
