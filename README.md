# hiive-challenge

Use `npx playwright test --ui` to run the tests. You shouldn't need to start the server, the tests should do that automatically. There is a bug around sorting the added timezones so there is one failing test case until the bug is fixed. I added `ata-playwright-test-label` to components to make selectors more robust and less prone to flakyness.

The below bugs were found with only running the timezone-app as per the instructions.

## Bugs

**Title:** UI does not match what was rendered on the server runtime error on page load <br>
**Environment:** localhost <br>
**Description:** When loading the page, you see a big red error banner at the bottom of the page. There is a runtime error of UI does not match what was rendered on the server. The error gives information on the call stack. <br>
**Reproduction Steps:** Start the timezone-app server, go to localhost, see the error banner <br>
**Current Results:** 3 errors banner at the bottom of the page is shown <br>
**Expected Results:** no errors should be showing up <br>
**Screenshots:** <img width="867" alt="Screenshot 2023-10-30 at 10 25 02 AM" src="https://github.com/llorinKeashly/hiive-challenge/assets/13005582/529e8b19-7ffb-4d47-83b4-2252bc437142"> <br>

**Title:** There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering. runtime error on page load <br>
**Environment:** localhost <br>
**Description:** When loading the page, you see a big red error banner at the bottom of the page. There is a runtime error of There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering. The error gives information on the call stack. <br>
**Reproduction Steps:** Start the timezone-app server, go to localhost, see the error banner <br>
**Current Results:** 3 errors banner at the bottom of the page is shown <br>
**Expected Results:** no errors should be showing up <br>
**Screenshots:** <img width="916" alt="Screenshot 2023-10-30 at 10 25 26 AM" src="https://github.com/llorinKeashly/hiive-challenge/assets/13005582/646d0dcd-3da5-486f-a59a-d04a6797704c"> <br>

**Title:** It appears you can delete the "You" timezone entry <br>
**Environment:** localhost <br>
**Description:** There is the option to delete the "you" entry. If you click delete, there is no message saying you can't do that. If you refresh the page then the "you" entry returns <br>
**Reproduction Steps:** Start the timezone-app server, go to localhost, click delete on "you" entry <br>
**Current Results:** it appears "you" is deleted <br>
**Expected Results:** Have the delete button either removed or greyed out for the "you" entry. Or have an error message appear saying you can't delete this entry. <br>

**Title:** Deleting "you" entry removes all other added timezones on refresh <br>
**Environment:** localhost <br>
**Description:** If you have a list of added timezones and delete the "you" entry and refresh the page, only the "you" entry will remain. <br>
**Reproduction Steps:** Start the timezone-app server, go to localhost, add a few timezones, delete the "you" entry, refresh the page <br>
**Current Results:** Only the "you entry remains <br>
**Expected Results:** All entries should still be present. <br>

**Title:** Sorting of the added timezones is not working <br>
**Environment:** localhost <br>
**Description:** If you add an entry for each of the different timezones, they don't end up getting sorted earliest to latest times. <br>
**Reproduction Steps:** Start the timezone-app server, go to localhost, add a timezone for each timezone in the dropdown, refresh the page <br>
**Current Results:** I would expect to see the entries ordered from earliest to latest times. <br>
**Expected Results:** Even after refresh the entries don't get sorted. <br>
**Screenshots:** <img width="1418" alt="Screenshot 2023-10-30 at 10 44 36 AM" src="https://github.com/llorinKeashly/hiive-challenge/assets/13005582/5ddfbc95-2d3e-46ae-baeb-f26111b75c95"> <br>

**Title:** Confirmation modal missing on delete <br>
**Environment:** localhost <br>
**Description:** When deleting a timezone entry the confirmation modal is missing. <br>
**Reproduction Steps:** Start the timezone-app server, go to localhost, add a timezone, click delete on added timezone <br>
**Current Results:** timezone deleted <br>
**Expected Results:** I would expect to see a confirmation modal to confirm you do in fact want to delete. <br>

**Title:** No error messages for adding timezones <br>
**Environment:** localhost <br>
**Description:** When going to add a timezone, if I try and save a timezone without filling in both timezone and label then nothing happens <br>
**Reproduction Steps:** Start the timezone-app server, go to localhost, click add timezone, click save <br>
**Current Results:** Nothing happens on the save <br>
**Expected Results:** I would expect to see an error message saying timezone label and timezone are missing. <br>

**Title:** Timezone and timezone label should have required indicators <br>
**Environment:** localhost <br>
**Description:** There is no visual indicators that timezone and the timezone label is required <br>
**Reproduction Steps:** Start the timezone-app server, go to localhost, click add timezone <br>
**Current Results:** It looks like timezone and timezone label aren't required <br>
**Expected Results:** I would expect to see either the standard `*` or `(required)` beside the timezone and label names. <br>

**Title:** Missing form input validation <br>
**Environment:** localhost <br>
**Description:** Currently you can enter any characters into the timezone label. Including those commonly used in SQL. This could be a security vulnerability. <br>
**Reproduction Steps:** Start the timezone-app server, go to localhost, click add timezone, in the timezone label enter any of the combination of ', `, ;, --, /* */ <br>
**Current Results:** All of the above characters are valid <br>
**Expected Results:** I would expect to see them filtered out or the form errors out for invalid characters <br>
**Screenshots:** <img width="1415" alt="Screenshot 2023-10-30 at 11 16 28 AM" src="https://github.com/llorinKeashly/hiive-challenge/assets/13005582/7542fdf5-6ffd-4c73-865d-494e87a2e962">
