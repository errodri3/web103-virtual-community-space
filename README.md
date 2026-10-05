# WEB103 Project 3 - *UnityGrid Plaza*

Submitted by: **Evelyn Rodriguez**

About this web app: **UnityGrid Plaza is a virtual community space for finding concerts. Click a venue on the plaza map to see its upcoming and past events, or browse every event on one page and filter by location.**

Time spent: 4 hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [X] **The web app uses React to display data from the API**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [X]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [X] **The web app displays a title.**
- [X] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [X] *Note: A non-visual list of links to different locations is insufficient.* 
- [X] **Each location has a detail page with its own unique URL.**
- [X] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [X] An additional page shows all possible events
  - [X] Users can sort *or* filter events by location.
- [X] Events display a countdown showing the time remaining before that event
  - [X] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Users can both filter by location AND sort events by date (soonest or latest first)
- [x] Countdowns update live every second
- [x] Past events are grayed out, crossed out, and labeled with how many days ago they happened
- [x] Event cards on the all-events page show which venue the event is at
- [x] The home page map scales to fill the full screen at any window size
- [x] The API returns a 404 error for locations or events that don't exist

## Video Walkthrough

Here's a walkthrough of implemented required features:
https://drive.google.com/drive/folders/1snXm9O91Gchrhhxqz6NoY-1NnQ7RAbmW?usp=sharing

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Macbook Neo Screenrecording
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

- In ES modules, imports run before dotenv.config(), so the database connection got empty values until dotenv was loaded inside database.js.
- The starter's map SVG didn't fill tall screens, so I used preserveAspectRatio="xMidYMid slice".

## License

Copyright 2026 Evelyn Rodriguez

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
