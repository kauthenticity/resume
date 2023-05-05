import SkillIcon from "../static/images/Skills.png"

export const Skills = () => {
  return (
    <section className="container">
      <h1>
        <img className="icon" src={SkillIcon} alt="skill"/>
        Skills
      </h1>
      <section className="subContainer">
        <h2>React</h2>
        <ul>
          <li>
            React의 렌더링 과정을 이해하고 상태 관리를 할 수 있습니다.
          </li>
          <li>
            재사용 가능한 컴포넌트를 통해 유지보수가 쉽도록 코드를 작성합니다.
          </li>
          <li>
            불변성 유지를 통한 부수효과 억제 및 가독성 향상을 추구합니다.
          </li>
        </ul>
      </section>
      <section className="subContainer">
        <h2>React Native</h2>
        <ul>
          <li>
            코어 컴포넌트와 애니메이션을 사용해서 원하는 UI/UX를 구현할 수
            있습니다.
          </li>
          <li>모바일 환경을 고려한 navigation 구조를 설계할 수 있습니다.</li>
        </ul>
      </section>
      <section className="subContainer">
        <h2>Javascript, Typescript</h2>
        <ul>
          <li>ES6 문법을 사용합니다.</li>
          <li>실행 컨텍스트, 프로토타입, 클로저와 같은 javascript의 핵심을 이해하고 있습니다.</li>
          <li>타입 추론을 통해 빠르게 코드를 작성하고 런타임 오류를 방지할 수 있습니다.</li>
          <li>확장성을 고려하여 타입을 설계할 수 있습니다.</li>
        </ul>
      </section>
      <section className="subContainer">
        <h2>Python</h2>
        <ul>
          <li>알고리즘 문제를 Python을 사용해서 풀 수 있습니다.</li>
          <li>
            Colab을 활용하여 Linear Regression, PCA 문제 등을 해결할 수
            있습니다.
          </li>
        </ul>
      </section>
    </section>
  )
}
