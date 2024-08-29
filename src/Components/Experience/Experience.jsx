import styled from 'styled-components';
import { Container, SectionTitle } from '../../Components/Experience/expStyle';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';



const data = [
  {
    id: 1,
    company: 'Starbucks',
    role: 'Software Engineer Intern',
    fromDate: new Date('2024-06-11'),
    toDate: new Date('2024-08-16'),
    tasks: [
      'Automated the process of updating test case results for QEs in TestRail',
      'Merge 6 pull requests to the Starbucks android US mobile mevelopment repo',
      'Performed weekly refinements and standups with the lead android engineer and swe 2 on my team',
      'Focused on feature testing, with plans to implement into regression testing',
    ],
  },
  {
    id: 2,
    company: 'UW-Madison',
    role: 'IT Student Lead',
    fromDate: new Date('2022-08-24'),
    toDate: new Date('2024-06-01'),
    tasks: [
      'Administered re/images, wipes, and debugging processes for new and loaner computers for university staff.',
      'Trained incoming IT students by hosting monthly workshops, and teaches current staff at the service desk too.'
    ],
  },
  {
    id: 3,
    company: 'Loop Capital',
    role: 'IT Intern',
    fromDate: new Date('2022-06-07'),
    toDate: new Date('2022-08-07'),
    tasks: [
      'Led the batch of 40+ incoming computers for finance sector to create an image containing Sass and Pass programs',
      'Researched the complexities of tech giants going into the finance sector and visualizing current data to prove if they can take over current startups'
    ],
  },
  {
    id: 4,
    company: 'Balyasny Asset Management',
    role: 'Machine Learning Intern',
    fromDate: new Date('2021-06-12'),
    toDate: new Date('2021-08-12'),
    tasks: [
      'Performed data cleaning to analyze traded share volumes and abnormal returns before earnings announcements, exploring their potential predictability of price movements',
      'Python scripting to retrieve and visualize data in Excel and Jupyter Notebook, effectively assessing the positive or negative outcomes leading up to earnings call dates'
    ],
  },
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Experience = () => {
  const monthDiff = (dateFrom, dateTo) => {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle>Work Experience</SectionTitle>

        <TimeLine>
          {data
            .sort((a, b) => b.fromDate.getTime() - a.fromDate.getTime())
            .map((ex) => (
              <TimeLineItem key={ex.id}>
                <ExperieceHeader>
                  <h3>
                    {ex.role}, {ex.company}
                  </h3>

                  <small>
                    {months[ex.fromDate.getMonth()] +
                      ' ' +
                      ex.fromDate.getFullYear()}{' '}
                    -{' '}
                    {ex.toDate.toDateString() === new Date().toDateString() ? (
                      'Present '
                    ) : (
                      <span>
                        {months[ex.toDate.getMonth()] +
                          ' ' +
                          ex.toDate.getFullYear()}{' '}
                      </span>
                    )}
                    ({monthDiff(ex.fromDate, ex.toDate)}{' '}
                    {monthDiff(ex.fromDate, ex.toDate) > 1 ? 'Months' : 'Month'}
                    )
                  </small>
                </ExperieceHeader>

                <TaskList>
                  {ex.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </TaskList>
              </TimeLineItem>
            ))}
        </TimeLine>
      </motion.div>
    </Container>
  );
};

export default Experience;

const TimeLine = styled.ul`
  list-style-type: none;
  margin: 1em 0;
  padding: 1em;
`;

const TimeLineItem = styled.li`
  background-color: rgba(241, 236, 213, 0.753);
  padding: 1rem;
  margin: 1rem 0;
  border-radius:8px;
  border-left: 1px solid var(--accent-blue);
  position: relative;
  &::after {
    content: '';
    position: absoiute;
    top: -5px;
    left: -6px;
    padding: 4px;
    border-radius: 50%;
    background-color: var(--accent-blue);
    border: 2px solid var(--accent-blue);
  }

  p {
    opacity: 0.7;
  }

  ul {
    padding: 0 1em;
  }
`;

const ExperieceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  top: -10px;

  h3 {
    font-weight: 600;
  }

  small {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const TaskList = styled.ul`
  list-style-type: circle;

  li 
  {
    color: var(--para-gray-color);
  }
`;

