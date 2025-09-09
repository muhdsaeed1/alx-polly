# ALX Polly: A Polling Application

ALX Polly is a modern polling web application that enables users to create, share, and vote on polls. It showcases secure authentication, real-time poll management, and a clean, responsive UI. This project is designed for learning and security auditing—several vulnerabilities are intentionally present for educational purposes.


## About the Application

ALX Polly allows authenticated users to create, share, and vote on polls. It's a simple yet powerful application that demonstrates key features of modern web development:

-   **Authentication**: Secure user sign-up and login.
-   **Poll Management**: Users can create, view, and delete their own polls.
-   **Voting System**: A straightforward system for casting and viewing votes.
-   **User Dashboard**: A personalized space for users to manage their polls.
-   - **Vote on polls** (with  authentication)
    - **QR Code Generation:** `qrcode.react` (optional for sharing polls)

The application is built with a modern tech stack:

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Backend & Database**: [Supabase](https://supabase.io/)
-   **UI**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
-   **State Management**: React Server Components and Client Components

### Add environment variables

Create a `.env.local` file in the project root with the following:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key # (if needed for admin features)
```

Get these values from your Supabase project dashboard under "Settings" > "API".




###  Configure Supabase

- [Create a free Supabase project](https://app.supabase.com/)
- In your Supabase dashboard, create the following tables:

#### `polls` table

| Column      | Type    | Notes                   |
|-------------|---------|-------------------------|
| id          | UUID    | Primary key, auto-gen   |
| user_id     | UUID    | References users        |
| question    | Text    | Poll question           |
| options     | Array   | Array of option strings |
| created_at  | Timestamptz | Default NOW()      |

#### `votes` table

| Column       | Type    | Notes                       |
|--------------|---------|-----------------------------|
| id           | UUID    | Primary key                 |
| poll_id      | UUID    | References polls            |
| user_id      | UUID    | Nullable (for anonymous)    |
| option_index | Integer | Index of chosen option      |
| created_at   | Timestamptz | Default NOW()           |

- Enable authentication in Supabase (Email/Password login).

- 
### Testing

  - Try admin functionality (enable)
  - npm run dev



### Your Objectives:

1.  **Identify Vulnerabilities**:
    -   Thoroughly review the codebase to find security weaknesses.
    -   Pay close attention to user authentication, data access, and business logic.
    -   Think about how a malicious actor could misuse the application's features.

2.  **Understand the Impact**:
    -   For each vulnerability you find, determine the potential impact.Query your AI assistant about it. What data could be exposed? What unauthorized actions could be performed?

3.  **Propose and Implement Fixes**:
    -   Once a vulnerability is identified, ask your AI assistant to fix it.
    -   Write secure, efficient, and clean code to patch the security holes.
    -   Ensure that your fixes do not break existing functionality for legitimate users.

### Where to Start?

A good security audit involves both static code analysis and dynamic testing. Here’s a suggested approach:

1.  **Familiarize Yourself with the Code**:
    -   Start with `app/lib/actions/` to understand how the application interacts with the database.
    -   Explore the page routes in the `app/(dashboard)/` directory. How is data displayed and managed?
    -   Look for hidden or undocumented features. Are there any pages not linked in the main UI?

2.  **Use Your AI Assistant**:
    -   This is an open-book test. You are encouraged to use AI tools to help you.
    -   Ask your AI assistant to review snippets of code for security issues.
    -   Describe a feature's behavior to your AI and ask it to identify potential attack vectors.
    -   When you find a vulnerability, ask your AI for the best way to patch it.

---

## Getting Started

To begin your security audit, you'll need to get the application running on your local machine.

### 1. Prerequisites

-   [Node.js](https://nodejs.org/) (v20.x or higher recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   A [Supabase](https://supabase.io/) account (the project is pre-configured, but you may need your own for a clean slate).

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd alx-polly
npm install
```

### 3. Environment Variables

The project uses Supabase for its backend. An environment file `.env.local` is needed.Use the keys you created during the Supabase setup process.

### 4. Running the Development Server

Start the application in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.


