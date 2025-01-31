import { TaskList } from "./components/TaskList";
import { TaskInput } from "./components/TaskInput";
import { FilterButtons } from "./components/FilterButtons";
import styled from "styled-components";
import { ProjectList } from "./components/ProjectList";
import { Dashboard } from "./components/dashboard/Dashboard";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-x: hidden;

  @media (max-width: 800px) {
    padding: 0.75rem;
    width: 100%;
  }
`;

const Header = styled.header`
  margin-bottom: 2rem;
  width: 100%;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  @media (max-width: 800px) {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: var(--font-weight-bold);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);

    @media (max-width: 800px) {
      font-size: 1.8rem;
    }
  }

  p {
    color: #4a5568;
    font-size: 1.1rem;
    line-height: var(--line-height-normal);
    max-width: 600px;
    font-weight: var(--font-weight-normal);
  }
`;

const Sidebar = styled.div`
  width: 500px;
  padding-left: 2rem;

  @media (max-width: 800px) {
    width: 100%;
    padding-left: 0;
    margin-top: 1rem;
  }
`;

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0;
    padding: 0;
    width: 100%;
  }
`;

type User = {
  name: string;
};

const user: User = {
  name: "Mika",
};

const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 1em;
  background-color: white;
  color: black;
  text-decoration: none;

  &:focus {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const App = (): React.ReactElement => {
  return (
    <>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <StyledSection>
        <Section id="main-content">
          <Header>
            <h1>Welcome {user.name}, here are your weekly stats</h1>
            <Dashboard />
          </Header>
          <FilterButtons />
          <TaskInput />
          <TaskList />
        </Section>
        <Sidebar>
          <ProjectList />
        </Sidebar>
      </StyledSection>
    </>
  );
};
