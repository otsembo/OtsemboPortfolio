export class Experience {

  constructor(id: number, role: string, company: string, duration:string, region: string, description: string) {
    this.id = id;
    this.role = role;
    this.company = company;
    this.region = region;
    this.description = description;
    this.duration = duration;
  }

  id!:number;
  role!:string;
  company!:string;
  region!:string;
  description!:string;
  duration!:string;

}
