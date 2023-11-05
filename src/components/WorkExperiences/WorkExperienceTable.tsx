import { Duration } from "../../lib/Duration";
import { Table, Td } from "../../styles";
import Chip from "../../lib/Chip";
import FlexBox from "../../lib/FlexBox";
import type { TWorkExperience } from "../../types/workExperience.type";

export const WorkExperienceTable = ({
  name,
  duration,
  introduce,
  role,
  techStacks,
  description,
  outcome,
}: TWorkExperience) => {
  return (
    <section className="subContainer">
      <h2>{name}</h2>
      <Duration duration={duration}></Duration>
      <FlexBox alignItems="center" gap="12px" mt="12px" flexWrap="wrap">
        {techStacks.map((techStack) => (
          <Chip text={techStack} />
        ))}
      </FlexBox>

      <Table>
        <tbody>
          <tr>
            <Td className="label">소개</Td>
            <Td>{introduce}</Td>
          </tr>
          <tr>
            <Td className="label">역할</Td>
            <Td>{role}</Td>
          </tr>

          <tr>
            <Td className="label">상세</Td>
            <Td>
              <ul className="project__text" style={{ margin: 0 }}>
                {description.map((desc, idx) => (
                  <li
                    className="project__text"
                    style={{ color: "var(--gray900)" }}
                    key={idx + desc}
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </Td>
          </tr>

          <tr>
            <Td className="label">성과</Td>
            <Td>
              <ul className="project__text" style={{ margin: 0 }}>
                {outcome.map((outcomeItem, idx) => (
                  <li
                    className="project__text"
                    style={{ color: "var(--gray900)" }}
                    key={idx + outcomeItem}
                  >
                    {outcomeItem}
                  </li>
                ))}
              </ul>
            </Td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};