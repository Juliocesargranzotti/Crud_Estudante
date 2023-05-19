export interface Estudante{
  delete(client: Estudante): unknown;
  id : number;
  name : string;
  date : number;
  email : string;
  telefone : number;
}
