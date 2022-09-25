import ErrorRepository from "../basic";

test("should get error text by code", () => {
  const errorRepository = new ErrorRepository();
  errorRepository.errors.set("errCode", "errText");

  expect(errorRepository.translate("errCode")).toBe("errText");
  expect(errorRepository.translate()).toBe("Unknown error");
});
