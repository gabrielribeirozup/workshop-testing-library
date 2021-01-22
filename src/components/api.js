export async function getPerson(name) {
  const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);

  return response.json();
}
