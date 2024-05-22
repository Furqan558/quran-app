export default async function fetchData() {
  const token = localStorage.getItem("token");
  const response = await fetch("/protected-endpoint", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data = await response.json();
    // Process the data
    console.log(data);
  } else {
    // Handle error
    console.error("Failed to fetch data");
  }
}
