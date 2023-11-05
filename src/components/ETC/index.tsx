import { Duration } from "@lib/Duration";
import { Table, Td } from "@styles";
import { ETC_DATA } from "@constants/etc";

function Etc() {
  return (
    <section className="container">
      <h1>
        <img className="icon" src="images/Etc.png" alt="" /> Etc.
      </h1>
      {ETC_DATA.map(({ title, duration, descriptions }, index) => (
        <section className="subContainer" key={index}>
          <h2>{title}</h2>
          <Duration duration={duration} />
          <Table>
            <tbody>
              <tr>
                <Td className="label">상세</Td>
                <Td>
                  <ul className="list__decoration" style={{ margin: 0 }}>
                    {descriptions.map((desc, index) => (
                      <li
                        className="list__decoration text__grey__900"
                        key={index}
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </Td>
              </tr>
            </tbody>
          </Table>
        </section>
      ))}
    </section>
  );
}

export default Etc;
