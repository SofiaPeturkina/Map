import ErrorRepository from "./basic";

console.log("app worked");

const errorRepository = new ErrorRepository();
const notFoundError = errorRepository.errors.set(404, "Не найдено!");
const lockedError = errorRepository.errors.set(423, "Заблокировано!");
const tooManyRequestsError = errorRepository.errors.set(429, "Слишком много запросов!");

console.log(errorRepository.translate(404));
console.log(errorRepository.translate(423));
console.log(errorRepository.translate(429));
console.log(errorRepository.translate());
