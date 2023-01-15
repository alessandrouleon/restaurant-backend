import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Any } from "typeorm";
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

    const checkData = Object.values(data);
    let existsEmpt = '';
    for (let index in checkData) {
      if (checkData[index].trim() === '') {
        existsEmpt += `'${Object.keys(data)[index]}' `;
      }
    }

    if (existsEmpt) {
      throw new AppError(`Prencha campo ${existsEmpt} obrigatório!`);
    }

    const username = await this.employeeRepository.findByUserName(data.username);
    const email = await this.employeeRepository.findByEmail(data.email);

    if (username || email) {
      throw new AppError("Usuário ou email ja existe!");
    }
    const employee = await this.employeeRepository.create(data);

    return employee as any;
  }
}

export { CreateEmployeeService }
