# SecureWave Red Team Exercise: OWASP Mobile Top 10 Vulnerability Assessment on BugBazaar

## 📱 Overview
This project simulates a security assessment for a **fictional company called SecureWave Technologies**, created purely for academic purposes. The goal was to evaluate a deliberately vulnerable mobile application, **BugBazaar**, against selected risks from the **OWASP Mobile Top 10** list.

Our focus was on:

- **M1 – Improper Credential Usage**
- **M3 – Insecure Authentication/Authorization**
- **M4 – Insufficient Input/Output Validation**
- **M8 – Security Misconfiguration**

> 🔎 **Note:** For full walkthroughs and technical steps, **refer to the final report here:**  
> 📄 [OWASP Top 10 for Mobile App_Final Report.pdf](https://github.com/pavithrancj/OWASP-Top-0-Mobile-Application/blob/main/OWASP%20Top%2010%20for%20Mobile%20App_Final%20Report.pdf)

---

## 🧪 Methodology

### 🔸 Static Analysis
Performed using **MobSF** to analyze permissions, hardcoded secrets, manifest settings, and insecure storage practices.

### 🔸 Dynamic Analysis
Using **Frida**, **ADB**, and **Android Studio**, we performed runtime manipulation and live testing of the app’s behavior in a controlled emulated environment.

---

## ⚠️ Key Vulnerabilities Identified

| OWASP Risk | Issue Summary |
|------------|----------------|
| **M1** | Hardcoded API keys and credentials leaked via logs. |
| **M3** | Weak authentication tokens and poor session handling. |
| **M4** | Unsanitized input leading to injection test cases. |
| **M8** | Debug mode enabled, exposed components, misconfigured permissions. |

---

## 🛠️ Tools Used

| Tool | Description |
|------|-------------|
| **MobSF** | Static analysis of the APK including permissions, storage, and crypto usage. |
| **Frida** | Dynamic hooking to manipulate runtime logic and bypass controls. |
| **ADB** | Access device shell, pull private app data, inspect logs. |
| **Jadx** | Decompiled APK into readable Java for reviewing source logic. |
| **Apktool** | Reverse engineering APK resources (smali, manifest, layouts). |
| **Android Studio** | Running and debugging the app in a test emulator. |

---


## 📚 Documentation

👉 **Full Report PDF:**  
[OWASP Top 10 for Mobile App_Final Report.pdf](https://github.com/pavithrancj/OWASP-Top-0-Mobile-Application/blob/main/OWASP%20Top%2010%20for%20Mobile%20App_Final%20Report.pdf)

---

## 📌 References

- [OWASP Mobile Top 10](https://owasp.org/www-project-mobile-top-10/)
- [OWASP MSTG – Mobile Security Testing Guide](https://owasp.org/www-project-mobile-security-testing-guide/)
