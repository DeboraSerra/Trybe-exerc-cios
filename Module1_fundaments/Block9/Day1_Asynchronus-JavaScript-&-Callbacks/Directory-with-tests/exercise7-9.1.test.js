const { getPokemonDetails } = require('../exercise6-9.1');

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const errorMessage = new Error("Não temos esse pokémon para você :(");
    function callback(error, message) {
      expect(error).toEqual(errorMessage);
      done();
    }

    getPokemonDetails((item) => item.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const newMessage = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    function callback(error, message) {
      expect(message).toEqual(newMessage);
      done();
    }

    getPokemonDetails((item) => item.name === 'Bulbasaur', callback);
  });
});