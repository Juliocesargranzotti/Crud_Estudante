export interface Estudante{
  delete(client: Estudante): unknown;
  id : number;
  name : string;
  course : string;
  email : string;
  telefone : number;
}
