import {
  test,
  expect,
  request,
  APIRequestContext,
  APIResponse,
} from "@playwright/test";
import { User } from "./types/user";

test("Testing API to Verify that “Chelsey Dietrich” has a zipcode of 33263", async ({
  request,
}) => {
  const apiContext: APIRequestContext = request;
  const response: Promise<APIResponse> = apiContext.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  expect((await response).ok()).toBe(true);
  let users = (await response).json();
  // declared a "User" interface as per the JSON response to avoid any errors when creating an array out of it
  let userArray: User[] = await users;
  let user = userArray.find((user) => user.name === "Chelsey Dietrich");
  expect(user?.address.zipcode).toBe("33263");
});
