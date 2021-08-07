export const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  export const getTitle = (value) => {
    switch (value) {
      case "confirmedCases":
        return "CONFIRMED CASES";

      case "casesOnAdmission":
        return "CASES ON ADMISSION";

      case "discharged":
        return "DISCHARGED";

      case "death":
        return "DEATH";

      default:
        return "Confirmed Cases";
    }
  };