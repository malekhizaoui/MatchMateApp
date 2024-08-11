# MatchMate

Welcome to MatchMate! MatchMate is your ultimate companion to find and participate in sports activities near you. Whether you want to play basketball, football, or volleyball, MatchMate connects you with local games and teams. Book stadium times, create QR codes for entry, and track your sports activities all in one place.

## About the App

**MatchMate** is designed to help sports enthusiasts easily connect with local games and teams. The app provides a seamless experience for finding sports activities, booking stadium slots, and managing your sports profile.

### Key Features:

- **Join Teams and Play Sports:** Find and join teams to play basketball, football, volleyball, and more with people near you.
- **Book Stadium Slots:** Book available time slots in local stadiums directly through the app.
- **Generate QR Codes:** Create QR codes for your bookings to facilitate entry into the stadium.
- **Profile Management:** View and manage your profile, including your personal information and sports preferences.
- **Game History:** Track all the games you have played with detailed history and statistics.
- **User Reviews:** Read and write reviews for players and games to build a trusted community.
- **Leaderboard:** See who the most active players are with our leaderboard showing the top players based on games played.

## Installation

Follow these steps to set up and start the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/malekhizaoui/MatchMateApp.git
    cd matchmateapp
    ```

2. Install dependencies using yarn:
    ```bash
    yarn
    ```

3. Configure the `BaseUrl`:
    - Navigate to the `src/services/BaseUrl/index.tsx` file.
    - Update the `BaseUrl` variable with your local IP address:
      ```typescript
      let BaseUrl = '';

      {
        Platform.OS == 'android'
          ? (BaseUrl = 'http://[provided address]:3009/api/v1')
          : (BaseUrl = 'http://[provided address]:3009/api/v1');
      }
      ```
    - To find your local IP address:
      1. Open Command Prompt (cmd) and type `ipconfig`.
      2. Look for the `IPv4 Address` in the output and replace `[provided address]` with this address in the `BaseUrl` configuration.

4. Start the development server:
    ```bash
    yarn start
    ```

5. To run the app on an Android emulator or device:
## Running on a Virtual Android Device

    - Make sure you have Android Studio installed on your machine.
    - Press `a` in the terminal where the development server is running to launch the app on the Android emulator or connected Android device.

## Running on a Physical Android Device

To run the app on your Android smartphone, follow these steps:

1. Open Developer Mode on your Android device:
    - Go to `Settings` > `About phone` and tap on `Build number` multiple times until Developer Mode is activated.

2. Enable Developer Mode and configure it:
    - Go to `Settings` > `System` > `Developer options`.
    - Enable `Wireless debugging` or `ADB debugging` (depending on your Android version).

3. Pair your device with your development machine:
    - In Developer options, choose `Pair device with pairing code`.
    - Click on the `Pair` button to get a 6-digit code.

4. Open Command Prompt (cmd) and navigate to the Android SDK platform-tools directory:
    ```bash
    cd C:\Users\your-username\AppData\Local\Android\Sdk\platform-tools
    ```

5. Pair and connect to your device:
    ```bash
    ./adb pair 192.168.1.102:[provided number]
    ./adb connect 192.168.1.102:[provided number]
    ```

6. Start the development server again (if needed) and press `a` to run the app on your connected Android device:
    ```bash
    yarn start
    ```
## Testing the App

For better testing, you can use the following account:

- **Email:** hizaoui.malek.habib@gmail.com
- **Password:** 123456789

Use these credentials to log in and explore the app's features.
## Contributors

    - Malek habib hizaoui

Feel free to contribute or report issues! Happy coding!
