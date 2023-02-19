class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.msg = message;
    this.timestamp = new Date().getTime();
    this.statusCode = statusCode;
    this.status = statusCode >= 400 ? 'fail' : 'success';
  }
}

export default AppError;
