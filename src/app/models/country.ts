export class Country {
  constructor(public name: string = '', public iata_code: string = '') {
    this.name = name;
    this.iata_code = iata_code;
  }
}
