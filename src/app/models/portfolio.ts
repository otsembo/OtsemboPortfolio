export class Portfolio {

    id!:number;
    name!:string;
    platform!:string;
    url!:string;
    image!:string


  constructor(id: number, name: string, platform: string, url: string, image:string) {
    this.id = id;
    this.name = name;
    this.platform = platform;
    this.url = url;
    this.image = image;
  }
}
