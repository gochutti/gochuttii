import { Authenticator } from "@aws-amplify/ui-react";

export default function Dashboard() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main style={{ padding: 20 }}>
          <h1>Namaste {user.username} 👋</h1>

          <p>Welcome to your gochutti travel portal.</p>

          <button onClick={signOut}>Sign Out</button>
        </main>
      )}
    </Authenticator>
  );
}
