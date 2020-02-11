import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

const getCountByRace = () => {
  return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/persons/countByRace')
    .then(res => res.json());
};

const DetentionsByRacePreHundredThousandChart = () => {
  const [blackCount, setBlackCount] = useState(0);
  const [hispanicCount, setHispanicCount] = useState(0);
  const [pacificCount, setPacificCount] = useState(0);
  const [asianCount, setAsianCount] = useState(0);
  const [whiteCount, setWhiteCount] = useState(0);
  const [nativeAmericanCount, setNativeAmericanCount] = useState(0);
  
  useEffect(() => {
    getCountByRace()
      .then(res => {
        setBlackCount(res[1].count),
        setHispanicCount(res[2].count),
        setPacificCount(res[3].count),
        setAsianCount(res[4].count),
        setWhiteCount(res[5].count),
        setNativeAmericanCount(res[6].count);
      });
  }, []);

  return (
    <>
      <h1>Detentions in Multnomah County by Race Per 100,000 Population</h1>
      <Chart
        width={'800px'}
        height={'800px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Race', 'Arrests'],
          ['Black', blackCount / 56569 * 100000],
          ['Native American', nativeAmericanCount / 8515 * 100000],
          ['Hispanic', hispanicCount / 88966 * 100000],
          ['White', whiteCount / 652045 * 100000],
          ['Pacific', pacificCount / 8515 * 100000],
          ['Asian', asianCount / 72700 * 100000],

        ]}
        options={{
          colors: ['#058F7A', '#9161A2', '#13646A', '#1F4763', '#A2506A']
        }}
      />
    </>
  );
};

export default DetentionsByRacePreHundredThousandChart;
