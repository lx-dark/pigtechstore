class User {
  constructor(name, email, cpf, birthdate, password, confirmPassword, phoneNumber, cep, street, neighborhood, city, state, houseNumber) {
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.birthdate = birthdate;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.phoneNumber = phoneNumber;
    this.cep = cep;
    this.street = street;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.houseNumber = houseNumber;
  }
}

export default User;
