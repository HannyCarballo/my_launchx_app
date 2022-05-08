const MissionCommander = require('../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
      //Aquí tú puedes usar el código como lo deseas utilizar
      const myMissionCommander = new MissionCommander("Woopa")

      //Validar el resultado esperado
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })