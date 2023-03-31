export class shopModel{
  id!: number;
  name!:string;
  price!:number;
  tags?:string[];
  favorite:boolean = false;
  starts:number = 0;
  imageUrl!:string;
}
