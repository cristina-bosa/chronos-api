export class ConecctionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConecctionError";
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}