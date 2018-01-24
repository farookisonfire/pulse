import React from 'react';
import {Bar} from 'react-chartjs-2';
import {
  resolveTotalEnrollmentByProgram,
  resolveTotalEnrollmentByCohort,
  alphabetizeList,
  applyProgramFilters
} from '../../utils/utils';

const resolveChartData = (enrollmentByCohort) => {
  const chartData = {};
  const labels = alphabetizeList(Object.keys(enrollmentByCohort));
  const data = labels.map(cohort => enrollmentByCohort[cohort]);
  const dataset = {
    label: 'Volunteers',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data
  };

  chartData.labels = labels;
  chartData.datasets= [dataset];
  return chartData;
};

const EnrollmentGraph = (props) => {
    const {
      applicants = [],
      programs = [],
      graphFilters
    } = props;

    const {
      healthInnovation,
      youthEmpowerment,
      education
    } = graphFilters;

    const enrollmentByProgram = resolveTotalEnrollmentByProgram(applicants);
    const filteredEnrollmentByProgram = applyProgramFilters(graphFilters, enrollmentByProgram);
    const enrollmentByCohort = resolveTotalEnrollmentByCohort(filteredEnrollmentByProgram, programs);
    const chartData = resolveChartData(enrollmentByCohort);

    return (
      <div>
        <h3 style={{fontWeight: 300}}>Enrollment by Cohort</h3>
        <Bar
          data={chartData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
};

export default EnrollmentGraph;
