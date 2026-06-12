# Medora HealthHub - Doctor Portal

[![React Native](https://img.shields.io/badge/React_Native-v0.85.3-blue.svg?logo=react&logoColor=white)](https://reactnative.dev)
[![React](https://img.shields.io/badge/React-v19.2.3-blue?logo=react)](https://reactjs.org/)
[![License: Private](https://img.shields.io/badge/License-Private-red.svg)](#)
[![Security: HIPAA](https://img.shields.io/badge/Security-HIPAA_Compliant-green.svg?logo=shield-halo)](https://www.hhs.gov/hipaa/index.html)

Welcome to **Medora HealthHub**, a highly scalable, premium-designed, and production-ready React Native application for medical practitioners. 

HealthHub is architected around security, speed, and visually delightful interfaces, adhering strictly to **HIPAA compliance and medical-grade security** patterns.

---

## 🚀 Key Highlights & Architectural Philosophy

Medora HealthHub is built upon a **Modular & Feature-First Directory Structure**, decoupling core UI components, theme configurations, navigation pipelines, and business workflows into modular namespaces.

```
src/
├── components/          # Shared atomic components (Buttons, Icons)
│   └── form/            # Centralized implicit-context Form elements (RHF)
├── constants/           # Global application constants (Strings, Images)
├── modules/             # Feature-based business modules (Domain scopes)
│   └── auth/            # Auth domain (views, styles, constants, types)
├── navigation/          # Custom navigation stack & route controllers
└── theme/               # Centralized Design Tokens (colors, typography)
```

---

## 📋 Table of Contents
1. [Prerequisites & Environment](#-prerequisites--environment)
2. [Quick Start Guide](#-quick-start-guide)
3. [Core Form System (React Hook Form)](#%EF%B8%8F-core-form-system-react-hook-form)
4. [Project Directory & File Structure](#-project-directory--file-structure)
5. [Package Scripts Reference](#-package-scripts-reference)
6. [Compilation & APK/AAB Builds](#%EF%B8%8F-compilation--apkaab-builds)

---

## 💻 Prerequisites & Environment

Before setting up the project, make sure your development environment satisfies the following conditions:

*   **Node.js**: `v22.11.0` or higher
*   **Java Development Kit (JDK)**: `JDK 17` (Mandatory for Gradle daemon configurations)
*   **Android Environment**: Android Studio, Android SDK (API 34/35 platforms), Android Virtual Device (AVD)
*   **iOS Environment** (macOS only): Xcode `v15.0` or higher, CocoaPods, Ruby Bundler
*   **Package Manager**: `Yarn` (recommended) or `npm`

---

## ⏱️ Quick Start Guide

### Step 1: Clone and Install Dependencies
Navigate to your workspace directory and install packages:

```bash
# Clone the repository and navigate inside
cd HealthHub

# Install dependencies using Yarn
yarn install
```

### Step 2: Native Setup (macOS / iOS only)
Setup CocoaPods inside the iOS folder:

```bash
# Install Ruby bundler configuration
bundle install

# Fetch and install Pod dependencies
bundle exec pod install
```

### Step 3: Run Metro Bundler
Start the local Metro dev server from the project root:

```bash
yarn start
```

### Step 4: Run on Emulator/Device
Open another terminal pane, launch your target device/emulator, and run:

#### Android
```bash
yarn android
```

#### iOS
```bash
yarn ios
```

---

## 🛡️ Core Form System (React Hook Form)

To keep our views clean, readable, and highly reusable, we have eliminated explicit `control` passing and boilerplate hooks. Form fields are integrated with a centralized [form](file:///d:/PERSONAL/HealthHub/src/components/form) module utilizing standard React Hook Form's **implicit context propagation**.

### Custom Form Components:
*   [FormProvider.tsx](file:///d:/PERSONAL/HealthHub/src/components/form/FormProvider.tsx): A context injector wrapper that manages and supplies form states downstream.
*   [RHFTextField.tsx](file:///d:/PERSONAL/HealthHub/src/components/form/RHFTextField.tsx): A high-fidelity, context-aware text input field. Renders validation errors automatically.
*   [RHFSelect.tsx](file:///d:/PERSONAL/HealthHub/src/components/form/RHFSelect.tsx): Context-aware dropdown select component for clean options mapping.
*   [RHFCheckbox.tsx](file:///d:/PERSONAL/HealthHub/src/components/form/RHFCheckbox.tsx): A context-aware checkbox for toggles, flags, and agreement fields.

### Example Form Implementation:
```tsx
import { useForm } from 'react-hook-form';
import { FormProvider, RHFTextField, RHFCheckbox } from 'components/form';

const methods = useForm({
  defaultValues: { email: '', remember: false }
});

const handleFormSubmit = methods.handleSubmit((data) => {
  console.log(data);
});

return (
  <FormProvider methods={methods}>
    <RHFTextField 
      name="email" 
      label="Email Address" 
      rules={{ required: 'Email is required' }} 
    />
    <RHFCheckbox name="remember">
      Remember Me
    </RHFCheckbox>
    <Button title="Submit" onPress={handleFormSubmit} />
  </FormProvider>
);
```

---

## 📂 Project Directory & File Structure

Here is a visual map of the key directories within `src/`:

```
src/
├── components/
│   ├── form/                  # Consolidated Form Module
│   │   ├── FormProvider.tsx   # React Hook Form context supplier
│   │   ├── RHFTextField.tsx   # Text field integrated with context
│   │   ├── RHFSelect.tsx      # Dropdown select integrated with context
│   │   ├── RHFCheckbox.tsx    # Checkbox integrated with context
│   │   └── index.ts           # Unified export bundle
│   ├── Button.tsx             # Curated design button component
│   ├── Checkbox.tsx           # Standard interactive checkbox component
│   ├── CustomIcon.tsx         # Vector SVG system component
│   ├── InputField.tsx         # Base interactive input component
│   └── SelectField.tsx        # Base dropdown select panel
│
├── modules/
│   └── auth/                  # Unified Auth Namespace
│       ├── view/              # Inlined, logic-rich View components
│       │   ├── LoginView.tsx  # Tabs-driven authentication layout
│       │   ├── RegisterView.tsx# HIPAA compliant onboarding flow
│       │   └── OTPView.tsx    # Timer-backed verification screen
│       ├── styles.ts          # Consolidated typography and StyleSheet
│       ├── constants.ts       # Shared local select options arrays
│       └── types.ts           # Prop interfaces and Tab union types
│
├── navigation/
│   └── AuthNavigator.tsx      # NavigationStack controller with BackHandler
└── theme/
    ├── colors.ts              # Harmonious medical color tokens
    └── typography.ts          # Centralized Outfit/Inter style definitions
```

---

## 🛠️ Package Scripts Reference

The `package.json` contains curated pipeline and lifecycle helper scripts for smooth development:

| Script Name | Command | Purpose |
| :--- | :--- | :--- |
| `start` | `react-native start` | Initializes Metro bundler server with hot-reloading |
| `android` | `react-native run-android` | Builds and deploys the app on a running Android emulator/device |
| `ios` | `react-native run-ios` | Compiles and runs the app on an iOS simulator |
| `lint` | `eslint .` | Runs static code analysis checks across the codebase |
| `test` | `jest` | Triggers testing suite |
| **`apk:debug`** | `cd android && gradlew assembleDebug` | Generates a locally installable **Debug APK** file |
| **`apk:release`** | `cd android && gradlew assembleRelease` | Compiles an optimized, signed **Release APK** file |
| **`aab:release`** | `cd android && gradlew bundleRelease` | Generates a Google Play **Android App Bundle (AAB)** file |
| **`clean`** | `cd android && gradlew clean` | Cleans Gradle compiler caches and clears build files |

---

## 🏗️ Compilation & APK/AAB Builds

### Generating Debug APK
To share a fast testing build with stakeholders or QA, run:
```bash
yarn apk:debug
```
*   **Compilation output path**: `android/app/build/outputs/apk/debug/app-debug.apk`

### Generating Production Release
To prepare packages for Play Store distributions:
```bash
# 1. Clean previous build caches
yarn clean

# 2. Build Release APK (or bundle AAB)
yarn apk:release
# OR
yarn aab:release
```
*   **Compilation output path**: `android/app/build/outputs/apk/release/app-release.apk`
*   **App Bundle output path**: `android/app/build/outputs/bundle/release/app-release.aab`
