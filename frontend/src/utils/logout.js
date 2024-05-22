export default function handleLogout() {
  localStorage.removeItem("token");
  console.log("Logged out");
}
