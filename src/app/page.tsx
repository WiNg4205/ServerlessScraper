export default async function Home() {
  const data = await fetch("https://cui62vu26d.execute-api.ap-southeast-2.amazonaws.com/default/OligarchyScraper", { cache: "no-store" });
  const companies = await data.json();
  return (
    <div className="flex justify-center">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Company</th>
            <th>Code</th>
            <th>Country</th>
            <th>Market Cap</th>            
          </tr>
        </thead>
        <tbody>
          {companies.map((company: string[]) => (
            <tr key={company[0]}>
              <td>{company[0]}</td>
              <td>{company[1]}</td>
              <td>{company[2]}</td>
              <td>{company[3]}</td>
              <td>{company[4]}</td>
              <td>{company[5]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
