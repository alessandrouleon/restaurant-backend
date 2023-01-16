
interface ICreateEmployeeDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  rule: string;
  department: string;
}

interface IUpdateEmployeeDTO extends ICreateEmployeeDTO {
  id: number;
}

export { ICreateEmployeeDTO, IUpdateEmployeeDTO }
