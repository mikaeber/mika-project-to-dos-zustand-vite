import { TaskList } from "./components/TaskList";
import { TaskInput } from "./components/TaskInput";
import { FilterButtons } from "./components/FilterButtons";
import styled from "styled-components";
import { ProjectList } from "./components/ProjectList";
import { DndContext } from "@dnd-kit/core";
import { useState } from "react";
import { Task } from "./components/Task";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 1440px;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  width: 100%;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: var(--font-weight-bold);
    letter-spacing: -0.02em;
    line-height: var(--line-height-tight);
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
`;

const StyledSection = styled(Section)`
  display: flex;
  flex-direction: row;
`;

export const App = () => {
  return (
    <StyledSection>
      <Section>
        <Header>
          <h1>Mikas Task Master</h1>
        </Header>
        <FilterButtons />
        <TaskInput />
        <TaskList />
      </Section>
      <Sidebar>
        <ProjectList />
      </Sidebar>
    </StyledSection>
  );
};
