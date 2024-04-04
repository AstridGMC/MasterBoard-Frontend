import { Timestamp } from "rxjs";
import { EntityEnum } from "src/global/permissions";

export class Project {
  id!:number;
  projectManager!:User;
  nombre!: string;
  descripcion!: string;
  background_url!:string;
  is_active:boolean=false;
  is_public:boolean= false;
  creacion_date!:string;
  actualizacion_date!:string;
}

export class card{
  id!:number;
  name!:string;
  description!:string;
  due_date!: string;
  remainder_date!: string;
  is_active: boolean=false;
  state!: string;
  case_type!:number;
  created_at_date!:string;
  updated_at_date!:string;
  develop_assigned!: User;
}

export class UserPManagerList {
  id!:number;
  nombres!: string;
  apellidos!: string;
  email!: string;
  rol!:string;
}

export class User {
  id!:number;
  firstName!: string;
  lastName!: string;
  address!: string;
  phone!: string;
  email!: string;
  imgUrl!:string;
  role!: string;
  password!: string;
  salary_per_hour!: number;
}



export class UserInfo {
  id!:number;
  firstName!: string;
  lastName!: string;
  address!: string;
  phone!: string;
  email!: string;
  imgUrl!:string;
  role!: string;
  authorities!:Array<string>;
}

class authority {
  autority!:string;
}

export class CaseType{
  id!: number;
  name!:string;
  description!: string;
  project_id: number=0;
  created_at!: string;
  updated_at!: string;
  label_color!: string;
}

//case_type_flow
export class step{
  id!:number;
  stage!: string;
  order!:number;
  case_tyoe_id!: number;
}
