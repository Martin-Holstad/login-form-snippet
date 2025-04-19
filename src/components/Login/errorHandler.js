export default function errorHandler(error) {
  switch (error.code) {
    case "auth/invalid-email":
      return {
        messageType: "warning",
        message: "Feil email eller passord.",
      };

    case "auth/user-disabled":
      return {
        messageType: "error",
        message: "Denne kontoen har blitt deaktivert.",
      };

    case "auth/invalid-credential":
      return {
        messageType: "warning",
        message: "Feil email eller passord.",
      };

    case "auth/user-not-found":
      return {
        messageType: "warning",
        message: "Ingen konto funnet med denne e-posten.",
      };

    case "auth/wrong-password":
      return {
        messageType: "warning",
        message: "Feil email eller passord.",
      };

    default:
      return {
        messageType: "error",
        message: "En ukjent feil oppstod. Vennligst prøv igjen.",
      };
  }
}
