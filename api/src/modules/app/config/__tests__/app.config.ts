import validator from "validator";

import { appConfig } from "..";

test("production config is boolean ", () => {
  expect(typeof appConfig().production).toEqual("boolean");
});

test("allowed origins are URLs", () => {
  appConfig().allowedOrigins.forEach((url) =>
    expect(validator.isURL(url, { require_tld: false })).toBeTruthy(),
  );
});

test("port is an integer", () => {
  expect(typeof appConfig().port).toEqual("number");
});
