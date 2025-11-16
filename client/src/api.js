import { auth } from "./firebase";

async function callProtectedApi() {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();

    const response = await fetch('/api/protected-route', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    const data = await response.json();
    console.log(data);
  }
}
